import { Component } from '@angular/core';
import { HousesService } from '../service/houses.service';
import { LikedpropertiesService } from '../service/likedproperties.service';
import { Router } from '@angular/router';
import { CollectionsService } from '../service/collections.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-likedproperties',
  templateUrl: './likedproperties.component.html',
  styleUrl: './likedproperties.component.css'
})
export class LikedpropertiesComponent {


  constructor(private hs:HousesService,private s:LikedpropertiesService,private route:Router,private cs:CollectionsService,private ms:MessageService){}
  searchproperties:any
  receivedata:any
  displaydata:any
  ngOnInit(){
    this.hs.getproperty().subscribe((i:any)=>{
      this.searchproperties=i
      // storing user search data
    this.receivedata=this.s.sendtosearch()
    // filter the properties based on user search
    this.displaydata=this.searchproperties.filter((i:any)=>{
      for(let a of this.receivedata){
        if (i.location == a.location && i.type == a.propertyType) {
          return true
        }
      }
      return false
    })
    console.log(this.displaydata);
    console.log(this.receivedata);
    })
  }
  // // display the data based on search data
  // searchdata(){
  //   this.displaydata=this.searchproperties.filter((i:any)=>{
  //     for(let a of this.receivedata){
  //       if (i.location == a.location && i.type == a.propertyType) {
  //         return true
  //       }
  //     }
  //     return false
  //   })
  //   console.log(this.displaydata);
    
  // }

  //added to collections from home
  likeProperty(id: any){
    id.flag1=!id.flag1
   this.cs.getintsrtproperty(id)
   this.ms.add({severity:'success', summary: 'Success', detail: 'Added to collections!'});
  

  }
    //deleting from collections from home
  dislikeproperty(id:any){
    id.flag1=!id.flag1
    this.cs.removeproperty(id)
    this.ms.add({severity:'error', summary: 'error', detail: 'Removed from collections!'})

  }

  sendIdToUrl(pid:any){
    this.route.navigateByUrl('/dashboard/details/'+pid)
  }



}
