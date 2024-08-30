import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from '../types/brand';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private apiUrl = `${environment.apiUrl}/brand`;  // Base URL for the API

  constructor(private http: HttpClient) { }

  getBrands() {
    return this.http.get<Brand[]>(this.apiUrl);
  }

  getBrandById(id: string) {
    return this.http.get<Brand>(`${this.apiUrl}/${id}`);  // Added slash between base URL and ID
  }

  addBrand(name: string) {
    return this.http.post(this.apiUrl, { name });
  }

  updateBrand(id: string, name: string) {
    return this.http.put(`${this.apiUrl}/${id}`, { name });  // Added slash between base URL and ID
  }

  deleteBrandById(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);  // Added slash between base URL and ID
  }
}
