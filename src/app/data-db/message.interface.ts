import { AsyncLocalStorage } from 'async_hooks';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

export interface MessageI{
    id:string;
    Email:any;
    Direccion:string;
    Celular:number;
    Metodo_de_pago:Selection;
    TotalProductos:number;
    TotalPagar:number;
    Lasagna: number;
    Hamburguesa: number;
    Sopa: number;
    Pasta: number;
    Asado: number;
    }
