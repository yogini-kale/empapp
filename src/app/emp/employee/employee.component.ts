import { Component, OnInit } from '@angular/core';

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
  result:string = "";

  empInfo=[
    {
      empid: 1,
      empname:'Yogini Kale',
      empdept: 'Angular',
      empsal: 30000
    },
    {
      empid: 2,
      empname:'Mohini Thakare',
      empdept: 'Testing',
      empsal: 40000
    },
    {
      empid: 3,
      empname:'Pratik Kale',
      empdept: 'Python',
      empsal: 50000
    },
    {
      empid: 4,
      empname:'Amar Thakare',
      empdept: 'Java',
      empsal: 60000
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }
  solution(fd:number,sd:string,td:string, fod:number)
  {

this.empInfo.push({'empid' : fd, 'empname':sd, 'empdept':td,'empsal':fod})
    console.log(this.empInfo)
   }
  
  search(emp:any){
    console.log(emp.empid);
  }
  
  ondelete(emp:any){
    this.empInfo.splice(emp, 1);
  }



}
