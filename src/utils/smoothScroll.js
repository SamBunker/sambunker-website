/**
 * Custom smooth scroll with configurable duration
 * This provides a slower, less jarring scroll animation
 * @param {Element} element - The target element to scroll to
 * @param {number} duration - Duration in milliseconds (default: 1000ms)
 */
export const smoothScrollTo = (element, duration = 1000) => {
  if (!element) return;

  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  // Easing function for smooth deceleration
  const easeInOutCubic = (t) => {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

/**
 * Instant jump to element (used with page transition)
 * @param {Element} element - The target element to jump to
 */
export const instantScrollTo = (element) => {
  if (!element) return;

  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo(0, targetPosition);
};
