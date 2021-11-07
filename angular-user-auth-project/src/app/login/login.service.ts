import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Router } from "@angular/router";
import { User } from "./User";


@Injectable({
    providedIn:'root'
})
export class LoginService{
    constructor(private routerService:Router){}
    loggedIn=false;
    login(user:User):any{
        return new Promise((resolve)=>{
            
                this.loggedIn=true;
                localStorage.setItem("username",user.username);
                localStorage.setItem("password",user.password);
                resolve (true);
       
      
    })

     

    }
    isLoggedIn(){
        return this.loggedIn;
    }
    logOut(){
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        this.loggedIn=false;
        this.routerService.navigate(["/login"]);
    }
}