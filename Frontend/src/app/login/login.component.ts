import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../_service/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  responce;
  constructor( private fb:FormBuilder, private ser:AdminService, private router:Router) { 

    this.loginForm=this.fb.group({

      'email':['', Validators.required],
      'pass':['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  login()
  {
     console.log(this.loginForm.getRawValue())
     let data= this.loginForm.getRawValue()
     this.ser.adminLogin(data)
     .subscribe(res=>{
       console.log(res)
       this.responce=res;
       if(this.responce.err==0)
       {
         alert(this.responce.msg)
         localStorage.setItem('adminid', this.responce.data)
         this.router.navigateByUrl('/admin')
       }
     })
  }

}
