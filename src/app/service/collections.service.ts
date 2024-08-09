import { Injectable } from '@angular/core';
import { property } from './propeties';
import { count, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {


  liked:property[]=[]
  constructor() { }


  // get the items from home property when the user clcik intrested store the property in liked array
 
  getintsrtproperty(i:any){
    if(!this.liked.find((ele)=>ele.id==i.id)){
      this.liked.push(i)
    }
  }
  //adding the property to collections 
  sendtocollections(){
    return of(this.liked)
  }

//deleting the property from collection
ind:any
  removeproperty(id:any){
    this.ind=this.liked.findIndex((item:any)=>item.id==id.id)
    if(this.ind!=-1){
      this.liked.splice(this.ind,1)
    }
  }

}

