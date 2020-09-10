import { Component, OnInit } from '@angular/core';
import{FormControl, FormGroup, Validators} from '@angular/forms';
import{DataDbService } from '../data-db/data-db.service';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-acliente',
  templateUrl: './acliente.component.html',
  styleUrls: ['./acliente.component.css']
})
export class AclienteComponent implements OnInit {


  numero1=0;
  numero2=0;
  numero3=0;
  numero4=0;
  numero5=0;  

  precio1=0;
  precio2=0;
  precio3=0;
  precio4=0;
  precio5=0;  
  totalp=0;
  totalprecio=0;
  desa:boolean;
  
 /* Operaciones*/
  
  sumar(){
    if(this.numero1<4){
       this.numero1=this.numero1+1;
       this.precio1=this.precio1+20;
        }
    else{
      alert('¡Oh!¡Oh! ¡Llegaste al limite de cantidad por producto!');
        }

       if(this.numero1==2){
         this.precio1=20;
      }  
    }        
     
    restar(){
            
      if (this.numero1>0){
        this.numero1=this.numero1-1;
        this.precio1=this.precio1-20;
         }

      if(this.numero1==1){
          this.precio1=20;
        }
        
     }

  
  sumar2(){
    if(this.numero2<4){
      this.numero2=this.numero2+1;
      this.precio2=this.precio2+25;
       }
   else{
     alert('¡Oh!¡Oh! ¡Llegaste al limite de cantidad por producto!');
       }

      if(this.numero2==2){
        this.precio2=25;
     }  
      
         }
    sumar3(){
      if(this.numero3<4){
        this.numero3=this.numero3+1;
        this.precio3=this.precio3+15;
         }
     else{
       alert('¡Oh!¡Oh! ¡Llegaste al limite de cantidad por producto!');
         }
 
        if(this.numero3==2){
          this.precio3=15;
       }  
    }
    sumar4(){
      if(this.numero4<4){
        this.numero4=this.numero4+1;
        this.precio4=this.precio4+15;
         }
     else{
       alert('¡Oh!¡Oh! ¡Llegaste al limite de cantidad por producto!');
         }
 
        if(this.numero4==2){
          this.precio4=15;
       }  
    }
    sumar5(){
      if(this.numero5<4){
        this.numero5=this.numero5+1;
        this.precio5=this.precio5+40;
         }
     else{
       alert('¡Oh!¡Oh! ¡Llegaste al limite de cantidad por producto!');
         }
 
        if(this.numero5==2){
          this.precio5=40;
       }  
    }
   
    restar2(){
      if (this.numero2>0){
        this.numero2=this.numero2-1;
        this.precio2=this.precio2-25;
         }

      if(this.numero2==1){
          this.precio2=25;
        }
    }
    restar3(){
      if (this.numero3>0){
        this.numero3=this.numero3-1;
        this.precio3=this.precio3-15;
         }

      if(this.numero3==1){
          this.precio3=15;
        }
    }
    restar4(){
      if (this.numero4>0){
        this.numero4=this.numero4-1;
        this.precio4=this.precio4-15;
         }

      if(this.numero4==1){
          this.precio4=15;
        }
    }
    restar5(){
      if (this.numero5>0){
        this.numero5=this.numero5-1;
        this.precio5=this.precio5-40;
         }

      if(this.numero5==1){
          this.precio5=40;
        }
    }

    /*Condicion para bloquear boton de suma*/
    confirmar(){
      if(this.totalp>3){
        this.desa=true; 
       }
    else{
      this.desa=false;
    }
    
      }

    

    
 /*Guardar Variables*/
    guardarPrecio(totalprecio){
      localStorage.setItem('totalprecio',totalprecio);
    }
  
    guardarProducto(totalp){
      localStorage.setItem('totalp',totalp);
    }
    guardarLasagna(numero1){
      localStorage.setItem('lasagna',numero1);
    }
    guardarHamburguesa(numero2){
      localStorage.setItem('hamburguesa',numero2);
    }
    guardarSopa(numero3){
      localStorage.setItem('sopa',numero3);
    }
    guardarPasta(numero4){
      localStorage.setItem('pasta',numero4);
    }
    guardarAsado(numero5){
      localStorage.setItem('asado',numero5);
    }

    /*Funciones*/
    productos(){
      this.totalp=this.numero1+this.numero2+this.numero3+this.numero4+this.numero5;
      this.guardarProducto(this.totalp);
    }
    
    precio(){
      this.totalprecio=this.precio1+this.precio2+this.precio3+this.precio4+this.precio5;
      this.guardarPrecio(this.totalprecio);
    }
    lasagna(){
       this.guardarLasagna(this.numero1);
    }
    hamburguesa(){
       this.guardarHamburguesa(this.numero2);
    }
    sopa(){
      this.guardarSopa(this.numero3);
    }
    pasta(){
      this.guardarPasta(this.numero4);
    }
    asado(){
      this.guardarAsado(this.numero5);
    }
 

  ngOnInit(){
    
  }

}
