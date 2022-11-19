import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/core/interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'joined', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  users: User[] = [
    {
      id: '507f191e810c19729de860ea',
      name: 'Usuario X',
      joined: new Date(),
    },
    {
      id: '507f191e810c19729de860ea',
      name: 'Usuario X',
      joined: new Date(),
    },
    {
      id: '507f191e810c19729de860ea',
      name: 'Usuario X',
      joined: new Date(),
    },
    {
      id: '507f191e810c19729de860ea',
      name: 'Usuario X',
      joined: new Date(),
    },
    {
      id: '507f191e810c19729de860ea',
      name: 'Usuario X',
      joined: new Date(),
    },
    {
      id: '507f191e810c19729de860ea',
      name: 'Usuario X',
      joined: new Date(),
    },
    {
      id: '507f191e810c19729de860ea',
      name: 'Usuario X',
      joined: new Date(),
    },
    {
      id: '507f191e810c19729de860ea',
      name: 'Usuario X',
      joined: new Date(),
    },
    {
      id: '507f191e810c19729de860ea',
      name: 'Usuario X',
      joined: new Date(),
    },
    {
      id: '507f191e810c19729de860ea',
      name: 'Usuario X',
      joined: new Date(),
    },
    {
      id: '507f191e810c19729de860ea',
      name: 'Usuario X',
      joined: new Date(),
    },
  ];

  dataSource = new MatTableDataSource<User>(this.users);
}
