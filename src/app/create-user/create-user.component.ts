import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  public userForm:FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(10)]),
    age: new FormControl('',[Validators.required, Validators.min(18), Validators.max(60)]),
    email: new FormControl(),
    phone: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      pin: new FormControl()
    }),
    type:new FormControl(),
    // busfee: new FormControl(),
    // hostelFee: new FormControl(),
    cards: new FormArray([])
  })

    get cardsFormArray(){
     return this.userForm.get('cards') as FormArray;
    }

    addCard(){
      this.cardsFormArray.push(
        new FormGroup({
          number: new FormControl(),
          expiry: new FormControl(),
          cvv:  new FormControl(),
        })
      )
    }

constructor(){

  this.userForm.get("type")?.valueChanges.subscribe(
    (data:any)=>{

      if(data == 'dayScholor'){
        this.userForm.addControl('busFee', new FormControl());
        this.userForm.removeControl('hostelFee')
      }
      else{
        this.userForm.addControl('hostalFee', new FormControl());
        this.userForm.removeControl('busFee');
      }
    }
  )

}


  submit(){
    console.log(this.userForm);
  }

  deleteCard(i:number){
    this.cardsFormArray.removeAt(i);
  }

}