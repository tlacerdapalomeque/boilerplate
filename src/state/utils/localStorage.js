let localStorage;
if (window.localStorage) localStorage = window.localStorage;

export function getLocalState(key) {
  if (localStorage) {
    const value = localStorage.getItem(String(key).toLowerCase());
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }
}
export async function setLocalState(key, value) {
  return (
    localStorage &&
    localStorage.setItem(String(key).toLowerCase(), JSON.stringify(value))
  );
}

export async function clearLocalStorage() {
  return localStorage && localStorage.clear();
}
