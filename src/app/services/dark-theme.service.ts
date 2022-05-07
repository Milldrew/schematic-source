import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkThemeService {
  isDark = false;

  getIsDark() {
    return this.isDark;
  }
  setIsDark(isLight: boolean) {
    this.isDark = !isLight;
  }
  constructor() {}
}
