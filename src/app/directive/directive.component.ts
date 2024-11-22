import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

age:number = 20;
ages:number[] = [10,20,30,40,50]; 

state:string = "telangana";
states:string[] = ["telangana","andra", "karmataka"]

products:any =[
  {name:'pen',price:20},
  {name:'shirt',price:3000},
  {name:'mobile',price:15000},
  {name:'laptop',price:45000},
]

today:any = new Date();

}
