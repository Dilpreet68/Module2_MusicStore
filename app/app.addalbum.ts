

import{ROUTES, Router}from '@angular/router';
import { Component,OnInit } from "@angular/core";
import {AlbumService} from './albumservice';
@Component
({
    selector:'add-comp',
    templateUrl:'addalbum.html'
})

export class AddAlbumComponent implements OnInit
{

constructor(private service:AlbumService,private router:Router)
{

}

albumId:any;
albumTitle:string;
albumArtist:any;
albumPrice:any;
myallData:any;

albumAll:any[]=[];

ngOnInit()
{
  
   this.albumAll=this.service.getAllAlbum();
   
}

addData():any{
      
    this.myallData={albumId:this.albumId,albumTitle:this.albumTitle,albumArtist:this.albumTitle,albumPrice:this.albumPrice};
   

   if(this.service.addEmployee(this.myallData))
   {
       this.router.navigate(['show']);
   }
   

   

}
}