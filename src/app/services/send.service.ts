import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const APIs = {
  "SEND" : "http://localhost:3000/api/send",
  "FETCH": "http://localhost:3000/api/contacts",
}
@Injectable({
  providedIn: 'root'
})
export class SendService {
  constructor(private http : HttpClient ) { }

  setDataSend(lname:string,fname:string,email:string){
    let data = {
      "fname":fname,
      "lname":lname,
      "email":email
    }
    return this.http.post(APIs.SEND,data)
  }

  getDataSend(){
    return this.http.get(APIs.FETCH)
  }
}
