import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

accounts:any = [];

constructor(private _accountService:AccountService){

_accountService.getaccounts().subscribe(
  (data:any)=>{
    this.accounts = data;
  },
  (err:any)=>{
    alert("Internal server error")
  }
)

}

}
