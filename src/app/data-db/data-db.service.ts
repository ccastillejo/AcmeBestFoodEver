import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database'
import{Observable, from} from 'rxjs';
import{MessageI} from 'src/app/data-db/message.interface';
import{map} from 'rxjs/operators'
import{PagarComponent} from 'src/app/pagar/pagar.component'


@Injectable({
  providedIn: 'root'
})
export class DataDbService {

  /*Enviar formulario reactivo a Firebase*/
constructor(private afs:AngularFirestore) { 
this.contactCollection=afs.collection<MessageI>('Datos de envio');
this.datos=this.contactCollection.valueChanges();
  }

private contactCollection: AngularFirestoreCollection<MessageI>;

private datos: Observable<MessageI[]>;


  saveMessage(newContact:MessageI): void{
    this.contactCollection.add(newContact);
  }

   /*Tomar datos para mostrarlos en la pagina del gerente*/
  getDatos(){
    return this.datos=this.contactCollection.snapshotChanges()
    .pipe(map(changes=>{
      return changes.map(action=>{
        const data=action.payload.doc.data() as MessageI;
        data.id=action.payload.doc.id;
        return data;
      });
    }));
  }
  


}
