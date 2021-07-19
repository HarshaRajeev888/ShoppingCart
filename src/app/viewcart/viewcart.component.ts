import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service'
import { ProductService } from '../product.service';
import {ProductlistComponent} from '../product/productlist/productlist.component'


@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {
items=this.cart.getitems()


total:number=0
totalamount:number=0
  constructor(private cart:CartService) { }

  ngOnInit(): void {
  }

  clear(){
    this.items=this.cart.clearCart()
    this.total=0
    return this.items
  }

  calcTotalCost(){
    let total=0
    for( var i=0;i<this.items.length;i++){

      total+=this.items[i].product_price*this.items[i].product_quantity
      this.totalamount=total
    }

    return total
  }

}
