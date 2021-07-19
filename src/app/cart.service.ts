import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
   total:number=0
  items:any=[]
  count:number=0
  

  constructor() { }

  addToCart(array:any){
    this.items.push(array)
  }
  getitems(){
    return this.items
  }

  clearCart(){
    this.items=[]
    this.total=0
    return this.items
  }
}
