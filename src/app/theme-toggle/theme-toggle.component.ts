import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent implements OnInit {
  constructor() {}
  isDark = false;
  ngOnInit(): void {}
  ngAfterContentChecked() {}
  changeTheme(event: any) {
    event.stopPropagation();
    console.log(this.isDark);
  }
}
