import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObbService } from 'src/app/obb.service';
import { Obb } from '../obb';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
obb:Obb = new Obb();

message:string
successful: string
custId: string;
password : string;
status2 : boolean=false;
status : boolean=false;
errmessage : string
  constructor(private service : ObbService,private router : Router) { }

  ngOnInit(): void {
  }
signUp()
{
  this.service.signUp(this.obb).subscribe(data => this.message = data);
  this.obb=new Obb();
  window.location.reload();
  alert("SignUp Successfully");
  this.router.navigate(['home']);
}

loginCustomer()
 {
   this.service.loginCustomer(this.custId,this.password).subscribe(data => 
   {
    
     sessionStorage.setItem("status","true");  
     sessionStorage.setItem("custId",this.custId);   
  //  sessionStorage.getItem("custId")
  this.custId=this.obb.username
     this.router.navigate(["profile/"+this.custId]);
    //  alert(data);
   
   }
   );
 }



}