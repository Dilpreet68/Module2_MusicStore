import { Component ,OnInit} from '@angular/core';
import {AlbumService} from './albumservice';

@Component({
    selector: 'show-comp',
    templateUrl: 'showalbum.html'
})
export class ShowAlbumComponent implements OnInit{
    constructor(private service:AlbumService)
{

}


albumAll:any[]=[];

ngOnInit()
{
   
    this.albumAll=this.service.getAllAlbum();  
}

deleteAlbum(data:number):any{
     
    alert("Are You Sure You want To delete?");
    this.albumAll.splice(data,1);
}

}

