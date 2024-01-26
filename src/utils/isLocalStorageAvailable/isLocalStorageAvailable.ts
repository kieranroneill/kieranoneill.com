/**
 * Checks if localStorage is available on the window.
 * @return {boolean} true if localStorage is available, false otherwise.
 */
export default function isLocalStorageAvailable(): boolean {
  const testKey: string = '__storage_test';

  try {
    window.localStorage.setItem(testKey, testKey);
    window.localStorage.removeItem(testKey);

    return true;
  } catch (e) {
    return false;
  }
}
