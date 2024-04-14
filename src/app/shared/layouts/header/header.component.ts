import { CommonModule, } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  logged_in: boolean = false;
  language: string = 'English';
  user_role!: any;
  searchTerm: string = ''; // New property for storing search term

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.user_role = sessionStorage.getItem("role");
    const user_session_id = sessionStorage.getItem("user_session_id");
    if(user_session_id){
      this.logged_in = true;
    }
  }

  logout(){
    sessionStorage.removeItem("user_session_id");
    sessionStorage.removeItem("role");
    this.router.navigateByUrl('/sign-in');
    location.reload();
  }

  searchProducts() {
    if (this.searchTerm.trim() !== '') {
      this.productService.searchProducts(this.searchTerm).subscribe(
        (data: any) => {
          // Process the search results
          console.log(data); // Assuming data contains search results
        },
        (error: any) => {
          console.error(error);
        }
      );
    }
  }
}