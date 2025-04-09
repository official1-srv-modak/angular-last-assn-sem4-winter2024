import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="navbar">
      <ul>
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/api-data">API Data</a></li>
        <li><a routerLink="/feedback">Feedback</a></li>
      </ul>
    </nav>
  `,
  styles: [`
    .navbar {
      background: #333;
      padding: 1rem;
    }
    ul {
      list-style: none;
      display: flex;
      gap: 2rem;
      margin: 0;
      padding: 0;
    }
    a {
      color: white;
      text-decoration: none;
    }
  `]
})
export class NavComponent {}