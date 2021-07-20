import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service'
import { ProductService } from '../product.service';
import {ProductlistComponent} from '../product/productlist/productlist.component'
import {AuthService} from 'src/app/auth.service'
import {LogService} from 'src/app/log.service'
import {Router} from '@angular/router'
import {Login} from 'src/app/login/login'


@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {
items=this.cart.getitems()


total:number=0
totalamount:number=0
loglist:Login[]=[]
returnURL=""
array:any
  constructor(private cart:CartService,private router:Router,private auth:AuthService,private log:LogService) { }

  ngOnInit(): void {

    this.log.readData().subscribe(data => {
         this.loglist = data.map((doc) => {
          return {
            id: doc.payload.doc.id,
            ...doc.payload.doc.data() as {}
          } as Login
        })
      })
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

  logout(){
       this.auth.logout()
       this.router.navigate(["/login"])
     }

}
