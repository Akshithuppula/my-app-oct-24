import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

  public studentForm:FormGroup = new FormGroup({
    name: new FormControl(),
    class: new FormControl(),
    fatherNAme: new FormControl(),
    email: new FormControl('',[Validators.required, Validators.email]),
    phone: new FormControl('',[Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
    address: new FormGroup({
      city: new FormControl('',[Validators.required]),
      state: new FormControl(),
      pincode: new FormControl('',[Validators.required, Validators.min(3), Validators.max(6)]),
    }),
    type:new FormControl(),
    // busFee: new FormControl(),
    // hostelFee: new FormControl(),
    marks: new FormArray([])  
  })

  get marksFormArray(){
    return this.studentForm.get('marks') as FormArray;
  }

  addmarks(){
    this.marksFormArray.push(
      new FormGroup({
        class: new FormControl(),
        year: new FormControl(),
        percentage: new FormControl('',[Validators.required, Validators.min(0), Validators.maxLength(100)]),
      })
    )
  }

  delete(i:number){
    this.marksFormArray.removeAt(i);
  }

  constructor(){

    this.studentForm.get("type")?.valueChanges.subscribe(
      (data:any)=>{
        
        if(data=='dayScholor'){
          this.studentForm.addControl('busFee',new FormControl());
          this.studentForm.removeControl('hostelfee');
        }
        else{
          this.studentForm.addControl('hostelfee',new FormControl());
          this.studentForm.removeControl('busFee');
        }
      }
    )

  }

  submit(){
    console.log(this.studentForm);
  }

}
