import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-buyer-dashboad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buyer-dashboad.component.html',
  styleUrl: './buyer-dashboad.component.css'
})
export class BuyerDashboadComponent implements OnInit {
  cartItemCount: number | undefined;
addProduct() {
throw new Error('Method not implemented.');
}
reduceProduct() {
throw new Error('Method not implemented.');
}
reduceItem() {
throw new Error('Method not implemented.');
}
addItem() {
throw new Error('Method not implemented.');
}
  
  all_products: any;
  show_Checkout: boolean = false;
  selectedProducts: any[] = [];

  constructor(private router: Router, private customerService: CustomerService) { }

  ngOnInit(): void {
    
      this.customerService.currentCartItemCount.subscribe(count => {
        this.cartItemCount = count;
        
      });
   
    this.getAllProduct();
  }
  goToHomePage() {
    this.router.navigate(['/home']);
  
  }

  getAllProduct() {
    this.customerService.allProduct().subscribe(data => {
      this.all_products = data;
      console.log(this.all_products);
    }, error => {
      console.log("My error", error);
    });
  }

 

  addToCart(id: number) {
    this.show_Checkout = true;
    this.customerService.addToCart(id);
    this.router.navigateByUrl('/cart');
    alert("Product added to cart: " );
  }

}


  
  

  // addToCart(product: any) {
  //   this.customerService.addToCart(product.id).subscribe(() => {
  //     alert("Product added to cart: " + product.name);
  //     // Redirect to the cart page
  //     this.router.navigateByUrl('/cart');
  //   }, error => {
  //     console.log("Error adding product to cart:", error);
  //   });
  // 
