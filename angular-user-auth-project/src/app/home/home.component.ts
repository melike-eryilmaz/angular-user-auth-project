import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private loginService: LoginService) {}
  permission=true;
  ngOnInit(): void {
    this.permission = this.loginService.getPermission('customer-list') || this.loginService.getPermission('admin-list'); 
  }
  viewCustomer() {
      this.router.navigate(['user-list']);
  }
}
