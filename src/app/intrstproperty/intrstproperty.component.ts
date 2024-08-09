import { Component} from '@angular/core';
import { CollectionsService } from '../service/collections.service';
import { Router } from '@angular/router';
import { HousesService } from '../service/houses.service';

@Component({
  selector: 'app-intrstproperty',
  templateUrl: './intrstproperty.component.html',
  styleUrl: './intrstproperty.component.css'
})
export class IntrstpropertyComponent   {

  intrstproperty:any[]=[]
  constructor(private cs:CollectionsService,private route:Router,private ps:HousesService){}

  ngOnInit(){
   this.cs.sendtocollections().subscribe((i:any)=>{
    this.intrstproperty=i
   })
  }


  sendIdToUrl(pid:any){
    this.route.navigateByUrl('/dashboard/details/'+pid)
  }
  //deleting the property from collections
  
  dislikeproperty(id:any){
    id.flag1=!id.flag1
    this.cs.removeproperty(id)

  }
}


