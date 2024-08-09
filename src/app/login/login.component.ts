import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MoveDirection, ClickMode, HoverMode, OutMode, Container, Engine } from "tsparticles-engine";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:any
  password:any
  confirmpassword:any
  userdata:any
  flag1=true
  flag2=false
  userflag=false
  signupform:FormGroup=new FormGroup({})
  loginform:FormGroup=new FormGroup({})

  constructor(private fb:FormBuilder,private route:Router){
   this.signupform=this.fb.group({
    username:[this.signupform.value.firstName + this.signupform.value.lastName],
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    password:['',Validators.required],
    confirmpassword:['',Validators.required],
    email:['',Validators.required],
    phoneNumber:['',Validators.required]
   })

   this.loginform=this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
   })
  //  this.regdata.reguser(this.signupform.value)
  }
  usersuccess:any
  usercheck:any
  pwd:any
  cpwd:any
  checkpassowrd(){
    this.pwd=this.signupform.value.password
    this.cpwd=this.signupform.value.confirmpassword
    return this.pwd==this.cpwd?true:false
    
  }
  signup(){
  this.userdata={
    username:this.signupform.value.firstName + this.signupform.value.lastName,
    firstName:this.signupform.value.firstName,
    lastName:this.signupform.value.lastName,
    email:this.signupform.value.email,
    phoneNumber:this.signupform.value.phoneNumber,
    password:this.signupform.value.password
    
  }
  localStorage.setItem('userinfo',JSON.stringify(this.userdata))
  this.route.navigateByUrl('/')
  this.usercheck=JSON.parse(localStorage.getItem('userinfo')||'{}')
  this.flag1=!this.flag1
  this.flag2=!this.flag2
  if(this.usercheck!=null){
    this.userflag=!this.userflag
    this.usersuccess=this.usercheck.username.slice(0,5)+123
  }


}
login(){
  if(this.loginform.value.username==this.usersuccess && this.loginform.value.password==this.usercheck.password){
    alert("login Succes")
    this.route.navigateByUrl('/dashboard/landingpage')

  }
  else{
    alert("login failed")
    this.route.navigateByUrl('/')
  }
}
toggleform(){
  this.flag1=!this.flag1
  this.flag2=!this.flag2
  
}
id = "tsparticles";

    /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
    particlesUrl = "http://foo.bar/particles.json";

    /* or the classic JavaScript object */
    particlesOptions = {
        background: {
            color: {
                value: "#000",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: ClickMode.push,
                },
                onHover: {
                    enable: true,
                    mode: HoverMode.repulse,
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 1,
                width: 1,
            },
            move: {
                direction: MoveDirection.none,
                enable: true,
                outModes: {
                    default: OutMode.bounce,
                },
                random: false,
                speed: 6,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 1,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 0.5, max: 3 },
            },
        },
        detectRetina: true,
    };

    particlesLoaded(container: Container): void {
        console.log(container);
    }

    async particlesInit(engine: Engine): Promise<void> {
        console.log(engine);

        // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }

}
