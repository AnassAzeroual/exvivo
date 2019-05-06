import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendService {
  url = "http://localhost:3000/api/posts"
  constructor(private http : HttpClient ) { }

  setDataSend(lname:string,fname:string,email:string){
    let data = {
      "fname":fname,
      "lname":lname,
      "email":email
    }
    return this.http.post(this.url,data)
  }
}
