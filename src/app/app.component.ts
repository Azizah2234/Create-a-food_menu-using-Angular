import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  total=0;
  qtr=0;
  menunam:string="";
  foodmenu=[
    {id:1,name:"برجر",price:20,description:" برجر عادي",img:"/assets/br.png"},
    {id:2,name:"تاكو",price:23,description:"تاكو دجاج ",img:"/assets/ta.png"},
    {id:3,name:"شاورما",price:17,description:"شاورما عربي",img:"assets/sh.png"},
    {id:4,name:"بيتزا",price:35,description:"بيتزا مارجريتا",img:"/assets/pz.png"}
  ]
  sum(event:any,price:number)
  {
    const ischecked:boolean=event.target.checked;
    if(ischecked)
    {
      this.total=this.total+price;
      this.qtr+=1;
    }
    else {
    this.total=this.total-price;
      this.qtr-=1;
    }
  }
  find(abc:any[]){
    return abc.filter(item => item.name.toLowerCase().includes(this.menunam.toLowerCase()))
  }
  
  title = 'menuch';
}
