import { Component, OnInit } from '@angular/core';
import { AuthService} from 'src/app/auth/auth.service';
import{ FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {UserI} from './user.interface';
import { NgForm } from '@angular/forms/forms';

@Component({
  selector: 'app-gerente',
  templateUrl: './gerente.component.html',
  styleUrls: ['./gerente.component.css'],
  providers:[AuthService],
})
export class GerenteComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  public user:UserI={
    email:"",
    password:""
  };
  public isError = false;
  
  ngOnInit(): void {
  }

  onLogin(form: NgForm) {
    if (form.valid) {
      return this.authService
        .loginuser(this.user.email, this.user.password)
        .subscribe(
        data => {
          this.authService.setUser(data.user);
          const token = data.id;
          this.authService.setToken(token);
          this.router.navigate(['/agerente']);
          location.reload();
          this.isError = false;
        },
        error => this.onIsError()
        );
    } else {
      this.onIsError();
    }
  }
  
  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }


}
