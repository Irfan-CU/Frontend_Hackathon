import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/shared/models/product';
import { CustomerService } from 'src/app/shared/services/customer/customer.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private customerService:CustomerService) { }


  productsList:any;



  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.customerService.fetchProduct().subscribe(data=>{
      this.productsList = data;
    });
  }


  deleteProduct(data:any){
    this.customerService.deleteProduct(data);
  }

}
