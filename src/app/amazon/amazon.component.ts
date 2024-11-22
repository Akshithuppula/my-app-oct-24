import { Component } from '@angular/core';
import { AmazonService } from '../amazon.service';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent {

products:any = [];

constructor (private _amazonSerice:AmazonService){

  _amazonSerice.getproduct().subscribe(
    (data:any)=>{
      this.products = data;
    },
    (err:any)=>{
      alert("Internal server error")
    }
  )

}

}
