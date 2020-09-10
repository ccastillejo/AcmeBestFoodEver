import { Component, OnInit } from '@angular/core';
import { AuthService} from 'src/app/auth/auth.service';
import{ FormGroup, FormControl, Validators} from '@angular/forms';
import{Router} from '@angular/router';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  providers:[AuthService],
})
export class ClienteComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }

  loginForm=new FormGroup({
    email: new FormControl('', Validators.required),
    contasena: new FormControl('', Validators.required)
  });

  ngOnInit(): void {

  }
  
  
  async onLogin(){
    const{email, contasena}=this.loginForm.value;
    try {
      const user =await this.authService.entrarConEmail(email,contasena);
      if(user){
        this.router.navigate(['/acliente']);
      }
      else{
        alert('Email o contraseña incorrecta, si no esta registrado registrese')
      }
    }
    catch(error){console.log(error)}
    
  }

  async onGoogleLogin(){
    try{
    const clau= this.authService.entrarConGoogle();
    if(clau){
      this.router.navigate(['/acliente']);
    }
    } catch(error){
      console.log(error);
    }
  }

}
