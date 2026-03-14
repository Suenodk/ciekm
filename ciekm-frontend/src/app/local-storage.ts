import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorage {
  static readonly seperator = ',';

  saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  /**
   * Slaat een lijst aan strings op.
   * LET OP: deze methode gebruikt een ',' als seperator.
   * @param key Sleutel waarmee de lijst wordt opgeslagen
   * @param value De lijst die opgeslagen moet worden
   */
  saveListData(key: string, value: string[]) {
    localStorage.setItem(key, value.join(LocalStorage.seperator));
  }

  getListData(key: string): string[] {
    const items = localStorage.getItem(key);

    if (items === null) {
      return [];
    }

    return items.split(',');
  }

  getData(key: string) {
    return localStorage.getItem(key)
  }
  removeData(key: string) {
    localStorage.removeItem(key);
  }

  clearData() {
    localStorage.clear();
  }
}
