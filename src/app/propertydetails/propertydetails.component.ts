import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousesService } from '../service/houses.service';

@Component({
  selector: 'app-propertydetails',
  templateUrl: './propertydetails.component.html',
  styleUrl: './propertydetails.component.css'
})
export class PropertydetailsComponent {

  constructor(private ar:ActivatedRoute,private hs:HousesService){}

  pid:any
  property:any
  ngDoCheck(){
    this.pid=this.ar.snapshot.paramMap.get('id')
    this.property=this.hs.gethouseById(this.pid)
    console.log(this.property);
    
  }
}
