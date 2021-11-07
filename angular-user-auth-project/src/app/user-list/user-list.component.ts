import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private loginService:LoginService) { }
  permissionCust  = false;
  permissionAdmin = false;

  ngOnInit(): void {
    this.permissionCust = this.loginService.getPermission('customer-list');
    this.permissionAdmin = this.loginService.getPermission('admin-list');
  }

}
