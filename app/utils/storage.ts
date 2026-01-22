/**
 * LocalStorage utilities for tour progress tracking
 */

const PROGRESS_KEY = "tour-progress";
const NOTIFICATION_PREFIX = "notification-shown-";

/**
 * Save visited stops to localStorage
 */
export function saveProgress(visitedStops: number[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(visitedStops));
  } catch (error) {
    console.error("Failed to save progress:", error);
  }
}

/**
 * Load visited stops from localStorage
 */
export function loadProgress(): number[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(PROGRESS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Failed to load progress:", error);
    return [];
  }
}

/**
 * Reset all tour progress
 */
export function resetProgress(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(PROGRESS_KEY);
    // Also clear all notification states
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(NOTIFICATION_PREFIX)) {
        localStorage.removeItem(key);
      }
    }
  } catch (error) {
    console.error("Failed to reset progress:", error);
  }
}

/**
 * Mark that a notification has been shown for a stop
 */
export function saveNotificationState(stopId: number): void {
  if (typeof window === "undefined") return;
  try {
    const key = `${NOTIFICATION_PREFIX}${stopId}`;
    localStorage.setItem(key, "true");
  } catch (error) {
    console.error("Failed to save notification state:", error);
  }
}

/**
 * Check if notification has been shown for a stop
 */
export function hasShownNotification(stopId: number): boolean {
  if (typeof window === "undefined") return false;
  try {
    const key = `${NOTIFICATION_PREFIX}${stopId}`;
    return localStorage.getItem(key) === "true";
  } catch (error) {
    console.error("Failed to check notification state:", error);
    return false;
  }
}
