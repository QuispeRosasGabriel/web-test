// LocalStorageService.ts

export class LocalStorageService {
  private static instance: LocalStorageService;

  private constructor() {}

  static getInstance(): LocalStorageService {
    if (!LocalStorageService.instance) {
      LocalStorageService.instance = new LocalStorageService();
    }
    return LocalStorageService.instance;
  }

  getItem<T>(key: string): T | null {
    try {
      const serializedItem = localStorage.getItem(key);
      return serializedItem ? JSON.parse(serializedItem) : null;
    } catch (error) {
      console.error("Error getting item from localStorage:", error);
      return null;
    }
  }

  setItem<T>(key: string, value: T): void {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error("Error setting item in localStorage:", error);
    }
  }

  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing item from localStorage:", error);
    }
  }
}

export default LocalStorageService;
