import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CategoryService } from '../../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']  
})
export class CategoryFormComponent {
  name!: string;
  isEdit = false;
  id!: string;

  constructor(
    private categoryService: CategoryService,  // Use constructor injection for CategoryService
    private router: Router,                    // Use constructor injection for Router
    private route: ActivatedRoute              // Use constructor injection for ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    if (this.id) {
      this.isEdit = true;
      this.categoryService.getCategoryById(this.id).subscribe((result: any) => {
        console.log(result);
        this.name = result.name;
      });
    }
  }

  add() {
    console.log(this.name);
    this.categoryService.addCategory(this.name).subscribe((result: any) => {
      alert('Category added');
      this.router.navigateByUrl('/admin/categories');
    });
  }

  update() {
    console.log(this.name);
    this.categoryService.updateCategory(this.id, this.name).subscribe((result: any) => {
      alert('Category updated');
      this.router.navigateByUrl('/admin/categories');
    });
  }
}
