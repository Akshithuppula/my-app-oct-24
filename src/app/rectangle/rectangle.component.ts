import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {

length:number = 0;
width:number = 0;
result:number = 0;

area(){
  this.result = this.length * this.width
}
Perimeter(){
  this.result = (this.length+ this.width)*2
}

}
