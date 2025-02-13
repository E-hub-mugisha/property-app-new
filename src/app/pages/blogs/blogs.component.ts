import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogsService } from '../../services/frontend/blogs.service';
import { error } from 'console';

@Component({
  selector: 'app-blogs',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  blogs: any[] = [];

  image: any;

  constructor(private blogService: BlogsService ,private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllBlogs();
  }

  getAllBlogs(): void {
    this.blogService.getAll().subscribe(
      (data: any[]) => {
        // You can handle the image URLs here if needed
        this.blogs = data.map((blog: any) => ({
          ...blog,
          image: blog.image  // Assuming image is a URL string
        }));
      },
      (error) => {
        console.error('Error fetching blogs', error);
      }
    );
  }

  viewDetails(id: number): void {
    // Redirect to blog details page
    this.router.navigate(['/blog', id]);

  }
}
