import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Account } from '../models/account';

@Service()
export class AccountService {
    
    private url:string='http://localhost:3000/accounts'
    private http = inject(HttpClient);

    // constructor(private http:HttpClient){}
    /*
    get -> Observable -> RxJs map() -> Account[] -> Array.map
    */
    getAccounts() : Observable<Account[]>{
        // return this.http.get<Account[]>(this.url)
        // .pipe(
        //     // map is rxjs 
        //     map(accounts => 
        //         // map of js array
        //         accounts.map(account => ({
        //             ...account, // spread operator
        //             createdAt: new Date(account.createdAt).toLocaleDateString()
        //         }))
        //     )
        // );

        return this.http.get<Account[]>(this.url)
        .pipe(
            // map is rxjs 
            map(accounts => {
                for(const account of accounts){
                    account.createdAt = new Date(account.createdAt).toLocaleDateString();
                }
                return accounts;
            }
            )
        );
    }

}
