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

// peopleInfo:any;
actorInfo:any;
familyInfo:any;
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

   
}


