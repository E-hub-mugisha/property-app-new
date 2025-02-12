import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogdetail',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './blogdetail.component.html',
  styleUrl: './blogdetail.component.css'
})
export class BlogdetailComponent {
  blog: any | null = null;
  private apiUrl = 'http://localhost:3000/blogs';
  image: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const blogId = this.route.snapshot.paramMap.get('id');
    console.log('Blog ID:', blogId);

    if (blogId) {
      this.fetchBlogById(Number(blogId));
    }
  }

  fetchBlogById(id: number): void {
    this.http.get<any>(`${this.apiUrl}/${id}`).subscribe(
      (data) => {
        this.blog = data;
        console.log('Fetched Blog:', data);
      },
      (error) => {
        console.error('Error fetching blog:', error);
        this.blog = null;
      }
    );
  }
}
