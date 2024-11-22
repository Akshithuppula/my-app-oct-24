import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {

height:number = 0;
weight:number = 0;
result:number = 0;
result2:string ="";


calculator(){
   this.result = this.weight/(this.height/100*this.height/100)

   this.result = parseFloat(this.result.toFixed(2));

if(this.result>34.9){
  this.result2 ="extremly weight";
}
else if(this.result>29.9){
  this.result2 = "obese";
}
else if(this.result>24.9){
  this.result2 = "over weight";
}
else if(this.result>18.5){
  this.result2 = "normel weight";
}
else{
  this.result2 = "under weight";
}
  
}

}
