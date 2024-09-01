import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a routerLink="/module1" routerLinkActive="active">Module 1</a>
      <a routerLink="/module2" routerLinkActive="active">Module 2</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-routing';
}
