import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import{ClienteComponent} from './cliente.component';
import{ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ClienteComponent],
  imports: [
    CommonModule, 
    ClienteRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClienteModule { }
