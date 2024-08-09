import { Component } from '@angular/core';
import { MypropertiesService } from '../service/myproperties.service';

@Component({
  selector: 'app-myproperties',
  templateUrl: './myproperties.component.html',
  styleUrl: './myproperties.component.css'
})
export class MypropertiesComponent {


  constructor(private mp:MypropertiesService){}
mypro:any

  ngOnInit(){
    this.mypro=this.mp.getmyperoperties()
    
  }
}
