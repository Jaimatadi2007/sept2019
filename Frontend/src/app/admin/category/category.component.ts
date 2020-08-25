import { Component, OnInit } from '@angular/core';
import { CatserService } from 'src/app/_service/catser.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  fData;
  finalData;
  constructor( private catser:CatserService) { }

  ngOnInit(): void {

    this.catser.fetchCat()
    .subscribe(res=>{
      console.log(res)
      this.fData=res;
      this.finalData=this.fData.data;
    })
  }

}
