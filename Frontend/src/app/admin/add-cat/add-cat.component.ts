import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { CatserService } from 'src/app/_service/catser.service';

@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.css']
})
export class AddCatComponent implements OnInit {

  
  catForm:FormGroup;
  image
  finaldata;
  constructor(private router:Router, private fb:FormBuilder, private ser:CatserService) { 

    this.catForm= this.fb.group({
      'catname':['', Validators.required],
      'desc':['', Validators.required],
      'date':['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  addImage(event)
  {
    if(event.target.files && event.target.files.length>0)
    {
      this.image=event.target.files[0];
      console.log(this.image)
    }
  }


 catAdd()
  {
    let cname=this.catForm.controls.catname.value;
    let desc=this.catForm.controls.desc.value;
    let date=this.catForm.controls.date.value;

    let formData=new FormData();
    formData.append('cname', cname);
    formData.append('desc', desc);
    formData.append('date', date);
    formData.append('Image', this.image);

    this.ser.addcat(formData)
    .subscribe(res=>{
      console.log(res)
      this.finaldata=res
      if(this.finaldata.err==0)
      {
        alert("inserted successfully")
        this.router.navigateByUrl('/admin/category')
      }
    })
  }

}

