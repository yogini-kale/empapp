import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http:HttpClient) { }

  myfunction(){
    alert("This is without parameter function")
  }
  addition(val1:number,val2:number){
    console.log("Addition is ", (val1+val2));
  }
  sub(val1:number,val2:number){
    console.log("substraction is ",(val1-val2));
  }
  mul(val1:number,val2:number){
    console.log("Multiplication is ",(val1*val2));
  }
  div(val1:number,val2:number){
    console.log("Division is ",(val1/val2));
  }
  myfunction2(val:string):string{
  return "This is return value function" + val;
  }
  getEmp(): Observable<any> {
  return this.http.get("http://localhost:3000/emp");
  }

}
