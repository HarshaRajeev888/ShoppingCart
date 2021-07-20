import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service'
import { ProductEntry } from '../product-entry/product-entry'
import { CartService } from 'src/app/cart.service'

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private ps: ProductService, private cart: CartService) {
    this.ps = ps
  }
  
  productlist: any
  array: any

  ngOnInit(): void {

      this.ps.get().subscribe((data) => {
      this.productlist = data
      console.log(this.productlist)
    })
}

  addToCart(array: any) {
    this.cart.addToCart(array)
  }

  addQuantity(array: any) {
    if (array.product_quantity >= 0) {
      array.product_quantity = array.product_quantity + 1
    }
  }
  minusQuantity(array: any) {
    if (array.product_quantity >= 1) {
      array.product_quantity = array.product_quantity - 1
    }


  }

}
