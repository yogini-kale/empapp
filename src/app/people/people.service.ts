import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http:HttpClient) { }
  getPeople(){
    return this.http.get("http://localhost:3000/people");
  }

  getActor(){
    return this.http.get("http://localhost:3000/actor");
  }

  getFam(){
    return this.http.get("http://localhost:3000/family")
  }

  getStud(){
    return this.http.get("http://localhost:3000/student");
  }
 
}
