import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {

  @ViewChild('username') usernameEle : ElementRef;
  @ViewChild('password') passwordEle : ElementRef;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  doLogin(){
    this.router.navigate(['users/dashboard']);
  }
}
