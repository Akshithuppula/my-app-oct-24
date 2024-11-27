import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  constructor(private _accountService:AccountService){}

public accountform:FormGroup = new FormGroup(

  {
    account_name: new FormControl(),
    available_balance: new FormControl(),
    account_number :new FormControl(),
    city: new FormControl(),
    profie_picture: new FormControl(),
  },
);

submit(){
  this._accountService.CreateAccountComponent(this.accountform.value).subscribe(
    (data:any)=>{
      alert("Created Succesfully");
    },
    (err:any)=>{
      alert("Creation Failed");
    }
  )
}



}
