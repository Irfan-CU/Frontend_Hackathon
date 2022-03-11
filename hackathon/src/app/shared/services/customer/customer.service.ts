import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../../models/product';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) {

  }

   addProduct(data:Product): Observable<any> {
   
    return this.http.post(environment.API,data);
  }

  fetchProduct(): Observable<any> {
    return this.http.get(environment.API);
  }

  deleteProduct(data:any){
    console.log("delete"+data)
    this.http.delete(' http://localhost:3000/products/457'+data);
  }
}
