import { Router } from '@angular/router';
import { TokenService } from './../../../service/token.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  
  constructor(private tokenService : TokenService, private router: Router) {}
  
  ngOnInit(): void {
    
  }

  onLogOut():void {
    this.tokenService.logOut();
  }

}
