import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { 
    this.http=http
  }

  get(){
    return this.http.get("http://localhost:4200///assets/productentry.json")
    
  }
}
