import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../core/Model/object-model';
@Injectable({
 providedIn: 'root'
})
export class ProductService {
 private productsUrl = 'api/products'; // Assuming your API endpoint for products
 constructor(private http: HttpClient) { }
 getProducts(page: number, pageSize: number): Observable<Product[]> {
   const start = (page - 1) * pageSize;
   const end = start + pageSize;
   return this.http.get<Product[]>(`${this.productsUrl}?_start=${start}&_end=${end}`);
 }
}