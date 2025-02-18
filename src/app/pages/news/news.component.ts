import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsArticles: any[] = [];
  private API_KEY = 'a71dd956c2fa4383b84e3a61da4b17f2';
  private API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.API_KEY}`;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>(this.API_URL).subscribe({
      next: (data) => this.newsArticles = data.articles,
      error: (error) => console.error('Error al cargar noticias:', error)
    });
  }
}
