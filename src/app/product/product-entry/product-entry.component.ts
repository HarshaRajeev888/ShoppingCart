import { Component, OnInit } from '@angular/core';
import {ProductEntry} from '../product-entry/product-entry'

@Component({
  selector: 'app-product-entry',
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.css']
})
export class ProductEntryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  model=new ProductEntry("","","","","")
  save(){
    console.log("product_id",this.model.pid)
    console.log("product_name",this.model.pname)
    console.log("product_price",this.model.pprice)
    console.log("product_description",this.model.pdes)
    console.log("product_quantity",this.model.pqty)
  }



}
