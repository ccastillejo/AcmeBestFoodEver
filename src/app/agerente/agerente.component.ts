import { Component, OnInit } from '@angular/core';
import{DataDbService} from 'src/app/data-db/data-db.service'
import{MessageI} from 'src/app/data-db/message.interface'
import { element } from 'protractor';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-agerente',
  templateUrl: './agerente.component.html',
  styleUrls: ['./agerente.component.css'],
 
})
export class AgerenteComponent implements OnInit {

  constructor(private datadbService: DataDbService, private route: ActivatedRoute) { }
public datos=[];
public contact='';

  ngOnInit(): void {
    this.datadbService.getDatos().subscribe(datos=>{
      console.log('Datos de envio', datos);
      this.datos=datos;
    })
}

}
