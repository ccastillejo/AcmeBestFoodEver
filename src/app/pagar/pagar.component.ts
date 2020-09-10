import { Component, OnInit } from '@angular/core';
import{DataDbService } from '../data-db/data-db.service';
import{FormControl, FormGroup, Validators} from '@angular/forms';
import { RouterLink } from '@angular/router';
import{Router} from '@angular/router';

@Component({
  selector: 'contactForm',
  templateUrl: './pagar.component.html',
  styleUrls: ['./pagar.component.css']
})
export class PagarComponent implements OnInit {

  public precio:any;
  public producto:any;
  public lasagna:any;
  public hamburguesa:any;
  public sopa:any;
  public pasta:any;
  public asado:any;

  emailPattern: any= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  createFormGroup(){
    return new FormGroup({
      Email: new FormControl('',[Validators.required, Validators.minLength(7), Validators.pattern(this.emailPattern)]),
      Direccion: new FormControl('',[Validators.required, Validators.minLength(7)]),
      Celular: new FormControl('',[Validators.required, Validators.minLength(10)]),
      Metodo_de_pago: new FormControl('',[Validators.required]),
      TotalProductos: new FormControl(localStorage.totalp),
      TotalPagar: new FormControl(localStorage.totalprecio),
      Lasagna: new FormControl(localStorage.lasagna),
      Hamburguesa: new FormControl(localStorage.hamburguesa),
      Sopa: new FormControl(localStorage.sopa),
      Pasta: new FormControl(localStorage.pasta),
      Asado: new FormControl(localStorage.asado)
    });
  }
  
  contactForm:FormGroup;

  constructor(private dbData: DataDbService,private router:Router) { 
  this.contactForm=this.createFormGroup();
}
  onResetForm(){
    this.contactForm.reset();
  }
  onSaveForm(){
    if(this.contactForm.valid){
    this.dbData.saveMessage(this.contactForm.value);
    this.onResetForm(); 
    console.log('Valid');
    alert('¡Datos enviados satisfactoriamente!')
    this.router.navigate(['/gracias']);
    }else{
      alert('¡Datos invalidos o campos vacios! Correo: @. min 7 caracteres Direccion: min 7 caracteres Celular: min 10 caracteres')
    }
  }
  ngOnInit(): void {
    this.obtenerLocal();
  }
  alerta(){
    alert('Correo invalido')
  }

  obtenerLocal(){
    return this.precio=localStorage.getItem('totalprecio'),
     this.producto=localStorage.getItem('totalp'),
     this.lasagna=localStorage.getItem('lasagna'),
     this.hamburguesa=localStorage.getItem('hamburguesa'),
     this.sopa=localStorage.getItem('sopa'),
     this.pasta=localStorage.getItem('pasta'),
     this.asado=localStorage.getItem('asado');
  }

  

}

