import { Component, HostBinding } from '@angular/core';
import { DarkThemeService } from './services/dark-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'schematic-source';
  @HostBinding('class.dark') isDark: boolean = this.themeService.getIsDark();
  ngAfterContentChecked() {
    this.isDark = this.themeService.getIsDark();
  }
  constructor(public readonly themeService: DarkThemeService) {}
}
