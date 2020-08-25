import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  url="http://localhost:8899/api/";


  adminLogin(data)
  {
    return this.http.post(this.url+'adminLogin', data);
  }

  
}
