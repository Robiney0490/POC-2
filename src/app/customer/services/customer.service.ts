import { Injectable } from '@angular/core';
import { ApiService } from '../../core/service/api.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class CustomerService {
 private single_product_id = new BehaviorSubject(null);
 currentProduct = this.single_product_id.asObservable();
 private cartItemCount = new BehaviorSubject<number>(0);
 currentCartItemCount = this.cartItemCount.asObservable();

 public user_url = "http://localhost:3000/user/";
 public product_url = "http://localhost:3000/products/";
 public order_url = "http://localhost:3000/orders/";
 public cart_url = "http://localhost:3000/cart/";

 constructor(private apiService: ApiService) { }

 allProduct(): Observable<any> {
   return this.apiService.get(this.product_url);
 }

 individualProduct(id: any) {
   return this.apiService.get(this.product_url + id);
 }

 userDetail(id: any) {
   return this.apiService.get(this.user_url + id);
 }

 insertNewOrder(order_dto: any): Observable<any> {
   return this.apiService.post(this.order_url, order_dto);
 }

 orderDashboardData(): Observable<any> {
   return this.apiService.get(this.order_url);
 }

 productDashboardData(): Observable<any> {
   return this.apiService.get(this.product_url);
 }

 addToCart(product_id: any) {
   this.single_product_id.next(product_id);
   // Increase cart item count
   let currentCount = this.cartItemCount.value;
   this.cartItemCount.next(currentCount + 1);
 }

 getCartItems(): Observable<any> {
   return this.apiService.get(this.cart_url);
 }
}