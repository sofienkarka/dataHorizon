import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })

  export class getFile {

fileUrl:string="http://dummy.restapiexample.com/api/v1/employees"


constructor(public http:HttpClient ){}

getElements(){
    return this.http.get(this.fileUrl)
}
  }