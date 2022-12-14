import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  title= "Angular Basic Pipes";
  today = Date();
  user = {
    Name:"Yogini Kale",
    DOB: 27,
    Place: "Pune"
  }
  check: boolean=true;

// peopleInfo:any;
actorInfo:any;
familyInfo:any;
studentInfo:any;
  constructor(private peopleService:PeopleService) { 
   

    // we can redeclare and update var
    var i=5;
    i=10;
    var i=30;
    
    // We can update the let but cannot redeclare
    let j:10;
    j:30;
   

    // we cannot redeclare const or nor we can update it
    const k = 40;
    
   

     }

  ngOnInit(): void {
    // this.pplDetails();
    let name="Yogini";
    if(false){
      var sname="Kale";
      console.log(name);
    }
    console.log(name);
    //this.actorDetails();

    this.family();
    this.getStudent();
  }
  
// pplDetails(){
//   this.peopleService.getPeople().subscribe(data => {
//     this.peopleInfo=data
//   });
// }

actorDetails(){
  this.peopleService.getActor().subscribe(data => this.actorInfo=data);
}

family(){
  this.peopleService.getFam().subscribe (rev => this.familyInfo=rev);
  }
  changeColor(){
    this.check=!this.check;
    // if (this.colorCheck===true) {
    //   this.colorCheck=false
    // }
    // else {
    //   this.colorCheck=true
    // }
   //this.colorCheck=this.colorCheck===true?false:true;

    
  }
  getStudent(){
    this.peopleService.getStud().subscribe (data => {
      this.studentInfo=data
    });
  }
   
}


