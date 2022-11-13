import { Component, ViewChild } from '@angular/core';
import { Store } from '../../interfaces/store.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss'],
})
export class StoresComponent {
  displayedColumns: string[] = ['id', 'name', 'created', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  stores: Store[] = [
    {
      id: '507f191e810c19729de860ea',
      name: 'Tienda X',
      created: new Date(),
    },
    {
      id: '507f191e810c19729de860ea',
      name: 'Tienda X',
      created: new Date(),
    },
    {
      id: '507f191e810c19729de860ea',
      name: 'Tienda X',
      created: new Date(),
    },
    {
      id: '507f191e810c19729de860ea',
      name: 'Tienda X',
      created: new Date(),
    },
    {
      id: '507f191e810c19729de860ea',
      name: 'Tienda X',
      created: new Date(),
    },
  ];

  dataSource = new MatTableDataSource<Store>(this.stores);
}
