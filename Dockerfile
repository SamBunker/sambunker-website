# Step 1: Build stage - Build the React app with Vite
FROM node:18-slim AS builder

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of your application files
COPY . .

# Step 6: Build the production-ready app
RUN npm run build

# Step 7: Production stage - Serve the built app with Node.js
FROM node:18-slim

# Step 8: Set the working directory
WORKDIR /usr/src/app

# Step 9: Install serve to serve the static files
RUN npm install -g serve

# Step 10: Copy the built files from the builder stage
COPY --from=builder /usr/src/app/dist ./dist

# Step 11: Expose the port that the app will run on
EXPOSE 3000

# Step 12: Serve the static files
CMD ["serve", "-s", "dist", "-l", "3000"]
