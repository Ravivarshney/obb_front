import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Obb } from '../obb';
import { ObbService } from '../obb.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

obbs:Obb[];
customerId:string
  constructor(private service : ObbService,private router : Router,private route : ActivatedRoute) { }

  ngOnInit(){
     this.customerId=sessionStorage.getItem('custId');
     this.customerId=this.route.snapshot.paramMap.get('custId')

alert(this.customerId)
    this.service.getAll().subscribe(data=>this.obbs=data);
    
  }

}
