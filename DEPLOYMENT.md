# Plausible Analytics & Portfolio Deployment Guide

Complete guide for deploying the Samuel Bunker Portfolio website with Plausible Analytics using Portainer GitOps.

---

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Initial Setup](#initial-setup)
3. [Plausible Configuration](#plausible-configuration)
4. [Portainer GitOps Setup](#portainer-gitops-setup)
5. [Cloudflare Reverse Proxy](#cloudflare-reverse-proxy)
6. [Environment Variables](#environment-variables)
7. [Deployment](#deployment)
8. [Verification](#verification)
9. [Troubleshooting](#troubleshooting)

---

## Prerequisites

- Portainer installed and running
- Docker and Docker Compose installed
- Cloudflare account with domain configured
- Git repository for this project
- Syslog server for logging (optional but recommended)

---

## Initial Setup

### 1. Generate Secret Key Base

Plausible requires a 64-character secret key. Generate one using OpenSSL:

```bash
openssl rand -base64 64
```

Copy this value - you'll need it for the `.env` file.

### 2. Create Environment File

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` with your actual values (see [Environment Variables](#environment-variables) section).

---

## Plausible Configuration

### Architecture Overview

This deployment includes:
- **PostgreSQL** (plausible_db): Stores user data, sites, and configuration
- **ClickHouse** (plausible_events_db): Stores analytics events (high-performance)
- **Plausible Analytics** (plausible): Main analytics application
- **Portfolio Website** (sambunker-portfolio): Your React website

### Network Configuration

Two Docker networks are used:
1. **plausible-network**: Internal network for Plausible services
2. **d-nginx_default**: External network for nginx reverse proxy (connects to Cloudflare)

### Volume Persistence

Two volumes are created for data persistence:
- `plausible-db-data`: PostgreSQL database
- `plausible-event-data`: ClickHouse analytics events

---

## Portainer GitOps Setup

### Step 1: Create Git Repository

Ensure your code is pushed to a Git repository (GitHub, GitLab, Gitea, etc.).

### Step 2: Configure Portainer Stack

1. **Login to Portainer**
2. **Navigate to Stacks**
3. **Click "Add Stack"**
4. **Select "Git Repository"**

### Step 3: Git Configuration

Fill in the following:

- **Name**: `sambunker-portfolio-analytics`
- **Repository URL**: `https://github.com/yourusername/sambunker-website.git`
- **Repository Reference**: `refs/heads/main` (or your branch name)
- **Compose Path**: `docker-compose.yml`

### Step 4: Environment Variables

Add environment variables in Portainer (or use `.env` file):

```env
# Plausible Analytics
BASE_URL=https://analytics.yourdomain.com
SECRET_KEY_BASE=your-generated-secret-key-here
POSTGRES_PASSWORD=your-secure-postgres-password
DISABLE_REGISTRATION=true
MAILER_EMAIL=admin@yourdomain.com

# Port Configuration
PLAUSIBLE_PORT=8000
PORTFOLIO_PORT=3000

# Logging
LOGGING_IP=your-syslog-server-ip
```

### Step 5: Enable Auto-Update (GitOps)

**Option A: Portainer Webhook (Recommended)**

1. In Stack settings, enable **"Automatic updates"**
2. Set **Pull interval** (e.g., 5 minutes)
3. Portainer will automatically pull and redeploy on git changes

**Option B: Self-Hosted Runner with Webhooks**

If you want instant updates on git push:

1. **Set up a webhook in your Git repository** pointing to Portainer webhook URL
2. **Portainer Webhook URL format**:
   ```
   https://your-portainer-url:9443/api/stacks/webhooks/<webhook-id>
   ```

3. **Generate webhook in Portainer**:
   - Go to Stack → Webhooks
   - Create webhook
   - Copy webhook URL

4. **Configure in GitHub/GitLab**:
   - Repository Settings → Webhooks
   - Payload URL: Portainer webhook URL
   - Content type: `application/json`
   - Select "Just the push event"

**Option C: Custom Self-Hosted Runner**

Create a simple script that watches for git changes:

```bash
#!/bin/bash
# File: auto-deploy.sh

REPO_URL="https://github.com/yourusername/sambunker-website.git"
PORTAINER_WEBHOOK="https://your-portainer:9443/api/stacks/webhooks/your-webhook-id"
CHECK_INTERVAL=60  # seconds

while true; do
  git fetch origin main
  if [ $(git rev-parse HEAD) != $(git rev-parse @{u}) ]; then
    echo "New changes detected, triggering redeploy..."
    curl -X POST $PORTAINER_WEBHOOK
  fi
  sleep $CHECK_INTERVAL
done
```

Run as a systemd service or Docker container.

---

## Cloudflare Reverse Proxy

### DNS Configuration

Add two DNS records in Cloudflare:

1. **Portfolio Website**:
   - Type: `A` or `CNAME`
   - Name: `@` (or subdomain like `www`)
   - Target: Your server IP
   - Proxy status: Proxied (orange cloud)

2. **Plausible Analytics Dashboard**:
   - Type: `A` or `CNAME`
   - Name: `analytics`
   - Target: Your server IP
   - Proxy status: Proxied (orange cloud)

### SSL/TLS Configuration

1. Navigate to **SSL/TLS** in Cloudflare
2. Set encryption mode to **Full** or **Full (strict)**
3. Enable **Always Use HTTPS**

### Nginx Configuration (on your server)

You likely already have an nginx reverse proxy. Add these locations:

**Portfolio Website** (`yourdomain.com`):

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

**Plausible Analytics** (`analytics.yourdomain.com`):

```nginx
server {
    listen 80;
    server_name analytics.yourdomain.com;

    location / {
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Reload nginx:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

## Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `BASE_URL` | Public URL for Plausible dashboard | `https://analytics.yourdomain.com` |
| `SECRET_KEY_BASE` | 64-char secret for Plausible | Generate with `openssl rand -base64 64` |
| `POSTGRES_PASSWORD` | PostgreSQL database password | Strong random password |
| `MAILER_EMAIL` | Email for Plausible admin | `admin@yourdomain.com` |
| `LOGGING_IP` | Syslog server IP for logging | `192.168.1.100` |

### Optional Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DISABLE_REGISTRATION` | Disable new signups | `true` |
| `PLAUSIBLE_PORT` | Internal Plausible port | `8000` |
| `PORTFOLIO_PORT` | Internal portfolio port | `3000` |
| `SMTP_HOST_ADDR` | SMTP server for email reports | - |
| `SMTP_HOST_PORT` | SMTP port | `587` |
| `SMTP_USER_NAME` | SMTP username | - |
| `SMTP_USER_PWD` | SMTP password | - |

---

## Deployment

### Initial Deployment

1. **Push code to Git repository**:
   ```bash
   git add .
   git commit -m "Add Plausible Analytics integration"
   git push origin main
   ```

2. **Deploy via Portainer**:
   - Navigate to your stack in Portainer
   - Click **"Deploy the stack"** or **"Update the stack"**
   - Portainer will pull from Git and start containers

3. **Monitor deployment**:
   - Check container logs in Portainer
   - Verify all 4 containers are running:
     - `plausible_db`
     - `plausible_events_db`
     - `plausible`
     - `sambunker-portfolio`

### Updating/Redeploying

**With GitOps enabled**, simply push to your repository:

```bash
git add .
git commit -m "Update website"
git push origin main
```

Portainer will automatically redeploy within the configured interval (or immediately if using webhooks).

**Manual update**:

1. Go to Portainer → Stacks → Your Stack
2. Click **"Pull and redeploy"**

---

## Verification

### 1. Check Container Status

```bash
docker ps | grep -E "plausible|sambunker"
```

All 4 containers should show as "Up".

### 2. Check Plausible Dashboard

Visit `https://analytics.yourdomain.com`

- Create admin account (if registration enabled)
- Add your website domain
- Get tracking code (should match what's in `index.html`)

### 3. Check Portfolio Website

Visit `https://yourdomain.com`

- Website should load normally
- Open browser DevTools → Network tab
- Look for request to `analytics.yourdomain.com/js/script.js`
- Should return `200 OK`

### 4. Verify Analytics Tracking

1. Visit your portfolio website
2. Wait 1-2 minutes
3. Check Plausible dashboard for the pageview

---

## Troubleshooting

### Plausible containers failing to start

**Check logs**:
```bash
docker logs plausible
docker logs plausible_db
docker logs plausible_events_db
```

**Common issues**:
- Database not ready: Wait 10-15 seconds, Plausible retries automatically
- Wrong `SECRET_KEY_BASE`: Regenerate and update `.env`
- Port conflicts: Change `PLAUSIBLE_PORT` in `.env`

### Portfolio website not loading

**Check logs**:
```bash
docker logs sambunker-portfolio
```

**Common issues**:
- Build failed: Check Dockerfile, ensure dependencies install correctly
- Port conflict: Change `PORTFOLIO_PORT` in `.env`
- Network issue: Verify `d-nginx_default` network exists

### Analytics not tracking

**Verify Plausible script**:
1. Check `index.html` has correct `data-domain` attribute
2. Ensure `src` points to your Plausible instance URL
3. Check browser console for errors
4. Verify ad-blockers aren't blocking the script

**Update tracking script**:

Edit [index.html](index.html#L10):

```html
<script defer data-domain="yourdomain.com" src="https://analytics.yourdomain.com/js/script.js"></script>
```

Replace `yourdomain.com` with your actual domain.

### GitOps not auto-deploying

**Check webhook**:
- Verify webhook URL is correct in Git repository
- Check webhook delivery logs in GitHub/GitLab
- Ensure Portainer is accessible from internet (or use VPN/tunnel)

**Check Portainer auto-update**:
- Verify "Automatic updates" is enabled
- Check pull interval setting
- Review Portainer logs for errors

### Database permission issues

**Reset Plausible database**:

```bash
docker-compose down -v  # WARNING: This deletes all analytics data
docker-compose up -d
```

---

## Additional Configuration

### Email Reports (Optional)

To enable email reports from Plausible, add SMTP configuration to `.env`:

```env
SMTP_HOST_ADDR=smtp.gmail.com
SMTP_HOST_PORT=587
SMTP_USER_NAME=your-email@gmail.com
SMTP_USER_PWD=your-app-password
SMTP_HOST_SSL_ENABLED=true
```

Then update `docker-compose.yml` plausible service environment (already configured, just uncomment).

### Custom Domain for Analytics Script

If you want to use `yourdomain.com/js/script.js` instead of `analytics.yourdomain.com/js/script.js`, add proxy in nginx:

```nginx
location /js/script.js {
    proxy_pass https://analytics.yourdomain.com/js/script.js;
    proxy_set_header Host analytics.yourdomain.com;
}
```

Then update [index.html](index.html#L10):

```html
<script defer data-domain="yourdomain.com" src="/js/script.js"></script>
```

---

## Security Best Practices

1. **Use strong passwords** for `POSTGRES_PASSWORD` and `SECRET_KEY_BASE`
2. **Set `DISABLE_REGISTRATION=true`** after creating your admin account
3. **Use HTTPS** for all connections (Cloudflare handles this)
4. **Restrict Portainer access** to VPN or IP whitelist
5. **Regularly backup** Plausible database volumes:
   ```bash
   docker run --rm -v plausible-db-data:/data -v $(pwd):/backup \
     ubuntu tar czf /backup/plausible-backup.tar.gz /data
   ```

---

## Useful Commands

**View logs**:
```bash
docker-compose logs -f plausible
docker-compose logs -f sambunker-portfolio
```

**Restart services**:
```bash
docker-compose restart plausible
docker-compose restart sambunker-portfolio
```

**Stop all services**:
```bash
docker-compose down
```

**Start all services**:
```bash
docker-compose up -d
```

**Rebuild portfolio container**:
```bash
docker-compose up -d --build sambunker-portfolio
```

---

## Support & Resources

- **Plausible Documentation**: https://plausible.io/docs
- **Portainer Documentation**: https://docs.portainer.io/
- **Docker Compose Reference**: https://docs.docker.com/compose/

---

**Last Updated**: November 29, 2024
