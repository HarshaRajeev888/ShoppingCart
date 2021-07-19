import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import {LogService} from '../log.service'
import {Router} from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

constructor(private log:LogService,private router:Router) { }
loglist:Login[]=[]
array=[]

email:any
pass:any
returnURL:string=""
loginsuccess:string=""


ngOnInit(): void {

  this.log.readData().subscribe(data=>{
    this.loglist=data.map((doc)=>{
      return{
        id:doc.payload.doc.id,
        ...doc.payload.doc.data() as {}
      }as Login
    })
  })

  this.returnURL="product/home"
}
view(){
  console.log(this.loglist)
}

logindata=new Login()
login(){
this.email=this.logindata.email
this.pass=this.logindata.pass


for(let i of this.loglist){
  if(this.email==i.email && this.pass==i.pass){
    this.loginsuccess="true"

    localStorage.setItem("isLogged","true")
    localStorage.setItem("email",this.logindata.email)
    this.router.navigate([this.returnURL])
  }
}








  if(this.logindata.id==null){
    this.log.saveData(this.logindata)
  }
  else{
    this.log.editData(this.logindata)
  }
}
edit(array:Login){
  this.log.editData(array)
}
delete(array:Login){
  this.log.deleteData(array)
}

  



 

}
