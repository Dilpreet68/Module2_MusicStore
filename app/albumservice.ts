import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
@Injectable({
    providedIn:'root'
})


export class AlbumService{

   
    
albumId:any;
albumTitle:string;
albumArtist:any;
albumPrice:any;
myallData:any;

albumAll:any[]=[];

    
    

    constructor(private http:HttpClient) {
        
    }

   
    addEmployee(data:any)
    {
        this.albumAll.push(data);
        return true;
    }

    
    getAllAlbum()
    {
     
     return this.albumAll;
     

    }
    
     

} 
