import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
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
  search(emp:any){
    console.log(emp.empid);
  }

}
