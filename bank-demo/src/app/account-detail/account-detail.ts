import { Component, Input } from '@angular/core';
import { Account } from '../models/account';

@Component({
  selector: 'app-account-detail',
  standalone: false,
  styleUrl: './account-detail.css',
  templateUrl: './account-detail.html',
})
export class AccountDetail {

  @Input()
  account:Account;

  constructor(){
      this.account = {
      "id": 0,
      "accountNo": "Unknown",
      "holderName": "Guest",
      "balance": 0,
      "accountType": "savings",
      "isActive": false,
      "createdAt": ""
    };
  }


}
