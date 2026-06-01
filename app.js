/**
 * Gravity Pause - Premium Countdown Engine
 * Chase Hughes + Elite Designer Approved - Schmick Edition
 * 
 * Features:
 * - Smooth, hypnotic countdown with subtle animations
 * - Auto-localizing to user timezone
 * - Breathing glow effects
 * - Elegant state transitions
 */

(function() {
  'use strict';

  // DOM Elements
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');
  const labelEl = document.querySelector('.countdown-label');

  // State
  let isPauseActive = false;
  let pauseTimeout = null;

  /**
   * Get the next UTC midnight as a Date object
   * This is the "Gravity Pause" moment - same for everyone globally
   */
  function getNextGravityPause() {
    const now = new Date();
    const next = new Date(Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate() + 1,
      0, 0, 0, 0
    ));
    return next;
  }

  /**
   * Format a number with leading zero
   */
  function pad(num) {
    return String(num).padStart(2, '0');
  }

  /**
   * Animate a digit change with subtle tick effect
   */
  function animateDigit(element, newValue) {
    if (!element) return;

    const currentValue = element.textContent;
    if (currentValue !== newValue) {
      element.textContent = newValue;
      element.classList.add('tick');
      setTimeout(() => element.classList.remove('tick'), 150);
    }
  }

  /**
   * Update the countdown display with smooth animations
   */
  function updateCountdown() {
    const now = new Date();
    const target = getNextGravityPause();
    let diff = target - now;

    // Check if we're at the pause moment (within 10 seconds of midnight)
    if (diff > 86400000 - 10000 || diff <= 0) {
      if (!isPauseActive) {
        activatePause();
      }
      return;
    }

    // Normal countdown
    if (isPauseActive) {
      deactivatePause();
    }

    const hours = Math.floor(diff / 3600000);
    diff %= 3600000;
    const minutes = Math.floor(diff / 60000);
    diff %= 60000;
    const seconds = Math.floor(diff / 1000);

    animateDigit(hoursEl, pad(hours));
    animateDigit(minutesEl, pad(minutes));
    animateDigit(secondsEl, pad(seconds));
  }

  /**
   * Activate the pause state with elegant transition
   */
  function activatePause() {
    isPauseActive = true;

    if (labelEl) {
      labelEl.textContent = 'Pause occurring';
      labelEl.classList.add('pause-active');
    }

    // Gentle fade to zeros
    if (hoursEl) hoursEl.textContent = '00';
    if (minutesEl) minutesEl.textContent = '00';
    if (secondsEl) secondsEl.textContent = '00';

    // Add a subtle body class for potential styling hooks
    document.body.classList.add('pause-moment');

    // Reset after 10 seconds
    pauseTimeout = setTimeout(() => {
      deactivatePause();
    }, 10000);
  }

  /**
   * Deactivate the pause state
   */
  function deactivatePause() {
    isPauseActive = false;

    if (labelEl) {
      labelEl.textContent = 'Time until next pause';
      labelEl.classList.remove('pause-active');
    }

    document.body.classList.remove('pause-moment');

    if (pauseTimeout) {
      clearTimeout(pauseTimeout);
      pauseTimeout = null;
    }
  }

  /**
   * Get user's local timezone info for display
   */
  function getTimezoneInfo() {
    const now = new Date();
    const offset = -now.getTimezoneOffset();
    const hours = Math.floor(Math.abs(offset) / 60);
    const minutes = Math.abs(offset) % 60;
    const sign = offset >= 0 ? '+' : '-';
    return `UTC${sign}${pad(hours)}:${pad(minutes)}`;
  }

  /**
   * Initialize the countdown with smooth entry
   */
  function init() {
    // Initial update
    updateCountdown();

    // Update once per second — no need for 60fps rAF loop
    setInterval(updateCountdown, 1000);

    // Store timezone info for potential display
    window.gravityPause = {
      timezone: getTimezoneInfo(),
      getNextPause: getNextGravityPause,
      isPauseActive: () => isPauseActive
    };

    // Log initialization (helpful for debugging)
    console.log('🌍 Gravity Pause initialized');
    console.log(`📍 Your timezone: ${getTimezoneInfo()}`);
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();