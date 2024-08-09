import { Component, EventEmitter, Output, output, Type } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HousesService } from '../service/houses.service';
import { Router } from '@angular/router';
import { LikedpropertiesService } from '../service/likedproperties.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {
  searchForm: FormGroup=new FormGroup({});

  constructor(private fb: FormBuilder,private hs:HousesService,private route:Router,private s:LikedpropertiesService) {
    this.searchForm = this.fb.group({
      location: [''],
      propertyType: ['']
    });

}

data:any
ngOnInit(){
  this.hs.getproperty().subscribe((i:any)=>{
  this.data=i
  })
}



// sending search data to likedproperty
senddata:any
res(){
this.senddata={
location:this.searchForm.value.location,
propertyType:this.searchForm.value.propertyType
}
// console.log(this.senddata);

this.s.addsearchdata(this.senddata)
this.route.navigateByUrl("/dashboard/searchdata") 
}
}
