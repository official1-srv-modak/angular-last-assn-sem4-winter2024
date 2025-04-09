import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="home">
      <h1>Welcome to Our Angular App</h1>
      <p>This is a modern Angular application showcasing routing, API integration, and reactive forms.</p>
    </div>
  `,
  styles: [`
    .home {
      padding: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }
  `]
})
export class HomeComponent {}