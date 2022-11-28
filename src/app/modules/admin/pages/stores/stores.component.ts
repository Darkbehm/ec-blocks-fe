import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from 'src/app/core/interfaces';
import { fakeStores } from 'src/app/core/utils/fakeData';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss'],
})
export class StoresComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'created', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  stores: Store[] = fakeStores;

  dataSource = new MatTableDataSource<Store>(this.stores);
}
