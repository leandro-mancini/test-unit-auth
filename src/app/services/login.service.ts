import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

  auth(user: String, password: String): Boolean{
    if(user === 'dotnet' && password === 'SP'){
      localStorage.setItem('token', '.NET_SP');
      return true;
    } else{
      return false;
    }
  }

}
