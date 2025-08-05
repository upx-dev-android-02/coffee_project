class LocalStorageHelper {
  constructor() {
    if (typeof window === 'undefined') {
      throw new Error('LocalStorageHelper só pode ser usado no client');
    }
  }

  setItem(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key) {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  removeItem(key) {
    window.localStorage.removeItem(key);
  }

  clear() {
    window.localStorage.clear();
  }
}

export default LocalStorageHelper;
