import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatserService {

  constructor(private http:HttpClient) { }

  url="http://localhost:8899/api/";

  addcat(catData)
  {
    return this.http.post(this.url+'addCat', catData);
  }

  fetchCat()
  {
    return this.http.get(this.url+'getcat');
  }
}
