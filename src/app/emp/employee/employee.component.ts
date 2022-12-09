import { Component, OnInit } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { EmpService } from '../emp.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  firstData: number=0;
  secondData: string="";
  thirdData: string="";
  fourthData: number=0;
  fifthData:any;
  sixData:any;
  num1: number=10;
  num2: number=20;
  message: string='Welcome to Angular Yogini';

  result(){
    console.log("Addition is" + (this.num1+this.num2))
  }


  getName(name:string){
    alert(name)
  }

  getNumber(number:number){
    alert (100)
  }

  hello(type:string){
    alert(type);
  }
  

  empInfo:any;
  
  constructor(private empService:EmpService) { 
    }
  



  ngOnInit(): void {
   let userName=[
  "Yogini", "Mohini", "Pratik", "Amar", "Abhi"
   ]

   let intArray=[
    14,22,50,103,90,60
   ]

  //  this.empService.getEmp().subscribe(data => {
  //   this.empInfo = data;
  //  });
  //  console.log(userName.slice(1,3));
  //  this.ondelete(2);
  //     console.log

  //     this.myfunction();
  //     this.myfunction1("This is with parameter function");
  //     let s=this.myfunction2('abc')
  //     console.log(s);

      // this.addition(10,20);
      //  this.substraction (50,20);
      //  this.division (40,20);
      //  this.multiplication(30,80);
      //  let mul=this.multiplication1(50,50)
      //  console.log(mul);
      //  console.log(this.multiplication1(50,50));
      // this.empService.myfunction();
      // this.empService.addition(90,100);
      // this.empService.sub(80,30);
      // this.empService.div(90,20);
      // this.empService.mul(110,50);
      // this.empService.myfunction2("Return Value");
      // console.log(this.empService.myfunction2 ("Return Value fun"));
      // this.loopArray(userName);
      // this.loopArray(intArray);
    //for (let i = 0; i < this.empInfo.length; i++) {
      // console.log(this.empInfo[i].empid);
      // console.log(this.empInfo[i].empname);
      // console.log(this.empInfo[i].empdept);
      // console.log(this.empInfo[i].empsal);
      // for (let j = 0; j < this.empInfo[i].mobile.length; j++) {
      //   for (let k = 0; k < this.empInfo[i].mobile[j].personal.length; k++) {
      //     console.log(this.empInfo[i].mobile[j].personal[k]);
      //   }
      // }

   // }
  }
  solution(fd:number,sd:string,td:string, fod:number,fifthD:any,sixd:any)

  {

// this.empInfo.push({'empid' : fd, 'empname':sd, 'empdept':td,'empsal':fod,'mobile':fifthD})
//     console.log(this.empInfo)
   }
  
  search(emp:any){
    console.log(emp.empid);
  }

  loopArray(val:any){
    for (let i=0; i<val.length;i++){
      console.log(val[i]);
    }
  }
  
  ondelete(index:number){
    this.empInfo.splice(index, 1);
  }

  myfunction(){
    alert("This is without parameter function")
  }
 
  myfunction1(type:string){
    alert("This is with parameter function");
  }
  myfunction2(val:string):string{
    
    return "this is with return value function "+ val;
  }

  addition(val:number, val1:number){
    console.log("Addition is ", (val+val1));
  }

  substraction(val:number,val1:number){
    console.log("substraction is ", (val-val1));
  }

  division(val1:number, val2:number){
    console.log ("Division is ", (val1/val2));
  }

  multiplication(val1:number, val2:number){
    console.log ("multiplication is", (val1*val2));
  }

  multiplication1(val1:number, val2:number){
    return val1*val2;
  }
  empDetails(){
    this.empService.getEmp().subscribe(data => this.empInfo=data );
  }
}
