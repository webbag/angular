import { Component, ViewChild } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { UserDataSource } from '../user-datasource';
import { UserItem } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
  imports: [MatTableModule]
})
export class UserList {
  @ViewChild(MatTable) table!: MatTable<UserItem>;
  dataSource: UserDataSource;

  displayedColumns = ['id', 'uuid', 'login', 'name', 'status'];

  constructor(private router: Router) {
    this.dataSource = new UserDataSource();
  }

  editUser(userId: string): void {
    this.router.navigate(['users/', userId]);
  }

}
