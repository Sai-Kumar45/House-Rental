import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { NgParticlesModule } from "ng-particles";
import { HomesComponent } from './homes/homes.component';
import { RoomsComponent } from './rooms/rooms.component';
import { PgsComponent } from './pgs/pgs.component';
import { AddpropertyComponent } from './addproperty/addproperty.component';
import { MypropertiesComponent } from './myproperties/myproperties.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LikedpropertiesComponent } from './likedproperties/likedproperties.component';
import { IntrstpropertyComponent } from './intrstproperty/intrstproperty.component';
import { PropertydetailsComponent } from './propertydetails/propertydetails.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomesComponent,
    RoomsComponent,
    PgsComponent,
    AddpropertyComponent,
    MypropertiesComponent,
    LandingpageComponent,
    LikedpropertiesComponent,
    IntrstpropertyComponent,
    PropertydetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,MatInputModule,MatButtonModule,
    NgParticlesModule,
    ToastModule,BrowserAnimationsModule,MatSnackBarModule
  ],
  providers: [
    provideAnimationsAsync(),
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
