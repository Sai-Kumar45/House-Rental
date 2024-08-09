import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HousesService } from '../service/houses.service';
import { CollectionsService } from '../service/collections.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {
  constructor(private route:Router,private ps:HousesService,private cs:CollectionsService,private ms:MessageService){}
  House:any
  properties:any
  ngOnInit(): void {
    this.ps.getproperty().subscribe((data: any) => {
      this.properties = data.filter((d: any) => d.type === 'Apartment');
      console.log(this.properties);
    });
  }
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
  onHover() {
   
  }
  
  onLeave() {
   
  }


}
