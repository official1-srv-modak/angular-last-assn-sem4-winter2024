import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="api-data">
      <h2>Top News Headlines</h2>
      <div class="posts">
        <div *ngFor="let post of posts" class="post">
          <h3>{{ post.title }}</h3>
          <p>{{ post.description }}</p>
          <a [href]="post.url" target="_blank">Read more</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .api-data {
      padding: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }
    .post {
      margin-bottom: 1.5rem;
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    a {
      display: inline-block;
      margin-top: 0.5rem;
      color: #007BFF;
    }
  `]
})
export class ApiDataComponent implements OnInit {
  posts: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPosts().subscribe(
      data => {
        console.log('API response:', data);
        this.posts = data.articles.slice(0, 5);
      },
      error => console.error('Error fetching posts:', error)
    );
  }
}
