import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HomesComponent } from './homes/homes.component';
import { RoomsComponent } from './rooms/rooms.component';
import { PgsComponent } from './pgs/pgs.component';
import { AddpropertyComponent } from './addproperty/addproperty.component';
import { LikedpropertiesComponent } from './likedproperties/likedproperties.component';
import { MypropertiesComponent } from './myproperties/myproperties.component';
import { IntrstpropertyComponent } from './intrstproperty/intrstproperty.component';
import { PropertydetailsComponent } from './propertydetails/propertydetails.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,
    children:[
      {path:'landingpage',component:LandingpageComponent},
      {path:'houses',component:HomesComponent},
      {path:'rooms',component:RoomsComponent},
      {path:'pgs',component:PgsComponent},
      {path:'addproperty',component:AddpropertyComponent},
      {path:'intrstproperties',component:IntrstpropertyComponent},
      {path:'mypro',component:MypropertiesComponent},
      {path:'details/:id',component:PropertydetailsComponent},
      {path:'searchdata',component:LikedpropertiesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
