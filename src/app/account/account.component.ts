import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

accounts:any = [];
term:string = "";

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


filter(){
  this._accountService.getFilterdaccounts(this.term).subscribe(
    (data:any)=>{
      this.accounts = data;
    },
    (wee:any)=>{
      alert("Internal server  error");
    }
  )
}

column:string ="";
order:string = "";

sort(){
  this._accountService.getSortedaccounts(this.column,this.order).subscribe(
    (data:any)=>{
      this.accounts = data;
    },
    (err:any)=>{
      alert("Internal server error");
    }
  )
}

limit:number = 0;
page:number = 0 ;

pagination(){
  this._accountService.getPagedaccounts(this.limit, this.page).subscribe(
    (data:any)=>{
      this.accounts = data;
    },
    (err:any)=>{
      alert("Internal server error")
    }
  )
}

delete(id:string){
  this._accountService.deleteAccount(id).subscribe(
    (data:any)=>{
      alert("Deleted succesfully!!!");
      location.reload();
    },
    (err:any)=>{
      alert("Internal server error");
    }
  )
}


}
