import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme: string = 'light';

  constructor() {
    if (this.isBrowser()) { 
      this.theme = localStorage.getItem('theme') || 'light';
      document.documentElement.setAttribute('data-theme', this.theme);
    }
  }

  toggleTheme(): void {
    if (this.isBrowser()) {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', this.theme);
      document.documentElement.setAttribute('data-theme', this.theme);
    }
  }

  getTheme(): string {
    return this.theme;
  }

  // 🔹 Método para comprobar si estamos en el navegador
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
