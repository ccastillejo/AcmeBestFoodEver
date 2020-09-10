import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerenteRoutingModule } from './gerente-routing.module';
import{GerenteComponent} from './gerente.component';
import{ReactiveFormsModule,FormsModule} from '@angular/forms';

@NgModule({
  declarations: [GerenteComponent],
  imports: [
    CommonModule, 
    GerenteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GerenteModule { }
