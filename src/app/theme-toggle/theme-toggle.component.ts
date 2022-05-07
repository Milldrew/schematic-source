import { DarkThemeService } from '../services/dark-theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent implements OnInit {
  constructor(public readonly themeService: DarkThemeService) {}
  isLight = false;
  ngOnInit(): void {}
  ngAfterContentChecked() {}
  changeTheme() {
    console.log(this.isLight);
    this.themeService.setIsDark(this.isLight);
  }
}
