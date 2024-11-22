import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmazonService {

  constructor(private _httpClent:HttpClient) {}

  getproduct():Observable<any>{
    return this._httpClent.get("https://fakestoreapi.com/products")
  }

}
