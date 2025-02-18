import { Component, HostBinding, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.css']
})
export class ThemeToggleComponent {
  @HostBinding('class.dark-mode') isDarkMode = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      this.isDarkMode = savedTheme === 'dark';
      this.updateTheme();
    }
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    }

    this.updateTheme();
  }

  private updateTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.isDarkMode) {
        document.body.setAttribute('data-theme', 'dark');
      } else {
        document.body.removeAttribute('data-theme');
      }
    }
  }
}
