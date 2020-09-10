import { Component, OnInit } from '@angular/core';
import { AuthService} from 'src/app/auth/auth.service';
import{Router} from '@angular/router';
import { UserI} from 'src/app/cliente/user.interface';
import{ FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers:[AuthService],
})
export class RegistroComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }

  registerForm=new FormGroup({
    email: new FormControl(''),
    contasena: new FormControl('')
  });

  ngOnInit(): void {
  }

  async onRegister(){
    const{email, contasena}=this.registerForm.value;
    try {
      const user =await this.authService.registrarUsuario(email,contasena);
      if(user){
        alert('¡El usuario ha sido creado! Porfavor ingrese')
        this.router.navigate(['/acceso']);
        
      }
      else{
        alert('El usuario ya existe o recuerde: su contraseña debe ser de 6 caracteres y su mail debe tener el @')
      }
    }
    catch(error){console.log(error)}
    
  }
   
  }

