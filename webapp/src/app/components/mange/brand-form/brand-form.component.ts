import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrandService } from '../../../services/brand.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-brand-form',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './brand-form.component.html',
  styleUrls: ['./brand-form.component.css']
})
export class BrandFormComponent implements OnInit {
  name!: string;
  id!: string;
  isEdit = false;

  private brandsService = inject(BrandService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
      this.brandsService.getBrandById(this.id).subscribe(result => {
          this.name = result.name;
      });
    
  }

  add() {
    this.brandsService.addBrand(this.name).subscribe((result) => {
      alert('Brand Added');
      this.router.navigateByUrl('/admin/brands');
    });
  }

  update() {
    this.brandsService.updateBrand(this.id, this.name).subscribe((result) => {
      alert('Brand Updated');
      this.router.navigateByUrl('/admin/brands');
    });
  }
}
