import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import{Observable} from 'rxjs/internal/observable';
import { first, map} from 'rxjs/operators';
import{auth} from 'firebase/app';
import{User} from 'firebase';
import{UserI} from 'src/app/gerente/user.interface';
import{AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import{HttpClient, HttpHeaders} from '@angular/common/http'
import{isNullOrUndefined} from 'util';

@Injectable()

export class AuthService {

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore, private http: HttpClient) {}
  headers:HttpHeaders=new HttpHeaders({
    "Content.Type": "application/json"
  });

  /*Login Cliente*/
  

  async entrarConEmail(email: string, contasena:string){
    try{

       const result= await this.afAuth.auth.signInWithEmailAndPassword(email, contasena);
       return result;
  }
  catch(error){console.log(error);
  }
}

  async registrarUsuario(email: string, contasena:string){
    try{

       const result= await this.afAuth.auth.createUserWithEmailAndPassword(email, contasena);
       return result;
  }
  catch(error){console.log(error);
  }
}
  async entrarConGoogle(){
    try{
      return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }
    catch(error){console.log(error)}
  }
   /*Login Gerente*/
  
   loginuser(email: string, password: string): Observable<any> {
    const url_api = "http://localhost:3000/api/login?include=user";
    return this.http
      .post<UserI>(
        url_api,
        { email, password },
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }

  setUser(user: UserI): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  setToken(token): void {
    localStorage.setItem("accessToken", token);
  }

  getToken() {
    return localStorage.getItem("accessToken");
  }

  getCurrentUser(): UserI {
    let user_string = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(user_string)) {
      let user: UserI = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }
  }
 


