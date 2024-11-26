import { Component } from '@angular/core';
import { StudentidService } from '../studentid.service';

@Component({
  selector: 'app-studentid',
  templateUrl: './studentid.component.html',
  styleUrls: ['./studentid.component.css']
})
export class StudentidComponent {

  students:any = [];

  constructor(private _studentidService:StudentidService){

    _studentidService.getStudent().subscribe(
      (data:any)=>{
        this.students = data;;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }

  delete(id:string){
    this._studentidService.deletestudent(id).subscribe(
      (data:any)=>{
        alert("Deleted succesfully!!!");
        location.reload();
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  term:string = "";

  filter(){
    this._studentidService.getFilteredStudent(this.term).subscribe(
      (data:any)=>{
        this.students = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
  
  column:string = "";
  order:string = "";

  sort(){
    this._studentidService.getSortedstudent(this.column, this.order).subscribe(
      (data:any)=>{
        this.students = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }


  limit:number = 0;
  page:number = 0;

  pagination(){
    this._studentidService.getPagedstudent(this.limit, this.page).subscribe(
      (data:any)=>{
        this.students = data;
      },
      (err:any)=>{
        alert("Iternal Server error");
      }
    )
  }

}
