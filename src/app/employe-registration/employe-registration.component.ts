import { Component } from '@angular/core';

@Component({
  selector: 'app-employe-registration',
  templateUrl: './employe-registration.component.html',
  styleUrls: ['./employe-registration.component.css']
})
export class EmployeRegistrationComponent {

empName:string = "";
role:string = "";

employees:any = [];

add(){

  let employee = {
    name: this.empName,
    role:this.role
  }

  this.employees.push(employee);
}

}
