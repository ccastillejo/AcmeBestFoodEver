import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{DataDbService} from './data-db/data-db.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { AclienteComponent } from './acliente/acliente.component';
import { AccesoComponent } from './acceso/acceso.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistroComponent } from './registro/registro.component'
/*FIREBASE*/
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFirestore} from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { AngularFireModule} from '@angular/fire';
import{AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from  '../environments/environment';
import{ ReactiveFormsModule, FormsModule} from '@angular/forms';
import { GerenteComponent } from './gerente/gerente.component';
import { PagarComponent } from './pagar/pagar.component';
import { from } from 'rxjs';
import { AgerenteComponent } from './agerente/agerente.component';
import { GraciasComponent } from './gracias/gracias.component';
import{HttpClientModule} from '@angular/common/http';


const routes: Routes = [
  { path: 'acceso', component: AccesoComponent },
  { path: 'acliente', component: AclienteComponent },
  { path: 'pagar', component: PagarComponent },
  { path: 'gracias', component: GraciasComponent },
  { path: 'agerente', component: AgerenteComponent },
  { path: 'registro', component: RegistroComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AclienteComponent,
    AccesoComponent,
    ClienteComponent,
    RegistroComponent,
    GerenteComponent,
    PagarComponent,
    AgerenteComponent,
    GraciasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    HttpClientModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)

  ],
  providers: [DataDbService, AngularFirestore,
    {provide: StorageBucket, useValue: 'gs://acme-food-company.appspot.com'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
