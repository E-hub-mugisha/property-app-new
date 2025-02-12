import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  imports: [ HttpClientModule, CommonModule ],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  blogs: any[] = [];

  private apiUrl = 'http://localhost:3000/blogs'; // JSON Server API URL
image: any;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute ) {}

  ngOnInit(): void {
    this.getAllBlogs();
  }

  getAllBlogs(): void {
    this.http.get<any[]>(this.apiUrl).subscribe((data) => {
      this.blogs = data;
    });
  }

  viewDetails(id: number): void {
    // Redirect to blog details page
    this.router.navigate(['/blog', id]);
  
  }
}
