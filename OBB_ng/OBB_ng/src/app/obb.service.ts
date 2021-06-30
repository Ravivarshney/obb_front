import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Obb } from './obb';


@Injectable({
  providedIn: 'root'
})
export class ObbService {

  constructor(private http:HttpClient) { }
 
  getAll():Observable<Obb []>
  {
    return this.http.get<Obb []>("http://localhost:9090"+"/getAll");
  }
  public signUp(obb:Obb)
  {
  return this.http.post("http://localhost:9090"+"/customersignup",obb,{responseType:'text'});
  }
  public loginCustomer(customerId : string,password: string)
  {

    return this.http.get("http://localhost:9090"+"/login/"+customerId+"/"+password,{responseType:'text'});
  }
}
