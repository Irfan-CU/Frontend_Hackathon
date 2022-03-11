import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/shared/models/product';
import { CustomerService } from 'src/app/shared/services/customer/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  productform:FormGroup = this.createFromGroup();
  message:string='';
  productsList:Product[]=[{}];

  createFromGroup(){
    return new FormGroup({
      ProductName: new FormControl('',
        Validators.required,
      ),
      Qty: new FormControl('',
        Validators.required,
      ),
    })
  }

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.productform=this.createFromGroup();
  }
  onSubmit() {
    
    if (!this.productform.valid){
      this.message="Please verify product details!!!";
    }
    else {
      var data:Product = {
        
        "ProductName": this.productform.controls['ProductName'].value,
        "Qty": this.productform.controls['Qty'].value
      }
     
      this.customerService.addProduct(data).subscribe();
      this.message="Product added";
    }
  }
  clearForm() {
    this.productform.reset();    
  }
  // clearForm method is to reset the form after submitting



  

}
