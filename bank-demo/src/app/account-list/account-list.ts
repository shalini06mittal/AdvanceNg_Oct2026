import { Component, OnInit, signal } from '@angular/core';
import { Account } from '../models/account';
import { accounts } from '../models/data';
import { AccountService } from '../service/account';

@Component({
  selector: 'app-account-list',
  standalone: false,
  styleUrl: './account-list.css',
  templateUrl: './account-list.html',
})
export class AccountList implements OnInit{

  accountlist = signal<Account[]>([]);

  constructor(private accService:AccountService){
    // this.accountlist = accounts;
  }
  ngOnInit(): void {
    console.log('on init');
    
    this.accService.getAccounts().subscribe(
      
      accounts => {
        this.accountlist.set(accounts);
        console.log(this.accountlist);
      }

    )
  }
}
