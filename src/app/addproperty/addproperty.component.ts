import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MypropertiesService } from '../service/myproperties.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { HousesService } from '../service/houses.service';

@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrl: './addproperty.component.css'
})
export class AddpropertyComponent {
  propertydata:any
  defauldiD:any
 
  
  propertyform:FormGroup=new FormGroup({})
  
  constructor(private fb:FormBuilder,private mp:MypropertiesService,private route:Router,private hs:HousesService){
    this.defauldiD=Number(this.hs.lengthofdata())
    console.log(this.defauldiD);
    this.propertyform=this.fb.group({
      id:[this.defauldiD+1],
      propertytype:['',Validators.required],
      name:['',Validators.required],
      phoneNumber:['',Validators.required],
      title:['',Validators.required],
      price:['',Validators.required],
      facing:['',Validators.required],
      area:['',Validators.required],
      location:['',Validators.required],
      description:['',Validators.required],
      image:['',Validators.required],

    })
      
  }
  addData(){
    if(this.propertyform.valid){
      this.propertydata={
        id:this.propertyform.value.id,
        name:this.propertyform.value.name,
        phoneNumber:this.propertyform.value.phoneNumber,
        type:this.propertyform.value.propertytype,
        title:this.propertyform.value.title,
        price:this.propertyform.value.price,
        facing:this.propertyform.value.facing,
        area:this.propertyform.value.area,
        location:this.propertyform.value.location,
        description:this.propertyform.value.description,
        image:this.propertyform.value.Image,
        flag1:false,
        flag2:false
      }
      this.mp.addproperty(this.propertydata)
      this.hs.addproperty(this.propertydata)//add property to propertyinfo in house service
    }
    this.route.navigateByUrl("/dashboard/mypro")
    Swal.fire({
      icon: "success",
      title: "property added",
      showConfirmButton: false,
      timer: 1500
    });
    // this.propertyform.reset();
  }



}
