import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
import {Login} from './login/login'

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private store:AngularFirestore) { }


  saveData(logindata:Login){
console.log(logindata)
this.store.collection("datas").add({...logindata})
  }
  readData(){
    return this.store.collection("datas").snapshotChanges()
  }
  editData(logindata:Login){
this.store.doc("datas/").update(logindata)
  }
  deleteData(logindata:Login){
    this.store.doc("datas/"+logindata.id).delete()

  }
}
