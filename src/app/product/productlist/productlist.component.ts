import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service'
import { ProductEntry } from '../product-entry/product-entry'
import { CartService } from 'src/app/cart.service'
import { Router } from '@angular/router'
import { AuthService } from 'src/app/auth.service'
import { LogService } from 'src/app/log.service'
import { Login } from 'src/app/login/login'

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private ps: ProductService, private cart: CartService, private router: Router,
    private auth: AuthService, private log: LogService) {
    this.ps = ps
  }
  loglist: Login[] = []
  productlist: any
  array: any

  ngOnInit(): void {




    this.ps.get().subscribe((data) => {
      this.productlist = data
      console.log(this.productlist)
    })
    this.log.readData().subscribe(data => {
      this.loglist = data.map((doc) => {
        return {
          id: doc.payload.doc.id,
          ...doc.payload.doc.data() as {}
        } as Login
      })
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

  logout(){
    this.auth.logout()
    this.router.navigate(["/login"])
  }
}
