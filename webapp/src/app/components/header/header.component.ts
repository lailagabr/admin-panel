import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service'; 
import { category } from '../../types/category'; 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],  
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']  
})
export class HeaderComponent implements OnInit {
  categoryList: category[] = [];  

 
  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe((result) => {
      this.categoryList = result; 
    });
  }
}
