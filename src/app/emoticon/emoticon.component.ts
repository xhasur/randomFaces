import {Component } from '@angular/core';

@Component({
    selector :'emoticon-component',
    templateUrl: 'emoticon.component.html' ,
    styleUrls: ['emoticon.component.css']
})
export class emoticonComponent{

emoticon:any={};
errorMessage:string;

 imageBase = "https://api.adorable.io/avatars/";    
 image = "";    

constructor(){}

 
    ngOnInit() {  
          setInterval(() => {
              this.image =   this.imageBase + Math.round(Math.random()*10)
           }, 2000);  
    }






}