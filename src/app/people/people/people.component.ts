import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
 

peopleInfo:any;
  constructor(private peopleService:PeopleService) { 

  }

  ngOnInit(): void {
    this.pplDetails();
  }
  
pplDetails(){
  this.peopleService.getPeople().subscribe(data => {
    this.peopleInfo=data
  });
}
}
