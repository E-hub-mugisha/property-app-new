import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from '../../services/frontend/blogs.service';

@Component({
  selector: 'app-blogdetail',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './blogdetail.component.html',
  styleUrl: './blogdetail.component.css'
})
export class BlogdetailComponent {
  blog: any;

  constructor(private route: ActivatedRoute, private blogService: BlogsService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getBlogDetails(id);
    }
  }

  getBlogDetails(id: number): void {
    this.blogService.getById(id).subscribe(
      (data: any[]) => {
        this.blog = data.find(blog => blog.id === id);
      },
      (error) => {
        console.error('Error fetching blog details', error);
      }
    );
  }
}
