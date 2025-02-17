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
  blog: any = null;

  constructor(private route: ActivatedRoute, private blogService: BlogsService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getBlogDetails(id);
  }

  getBlogDetails(id: number): void {
    this.blogService.getById(id).subscribe(data => {
      console.log(data); // Check if `image` is included
      this.blog = data;
    });
  }
}
