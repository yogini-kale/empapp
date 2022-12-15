import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './emp/employee/employee.component';
import { PeopleComponent } from './people/people/people.component';
import { CustomPipe } from './pipe/custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    PeopleComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
