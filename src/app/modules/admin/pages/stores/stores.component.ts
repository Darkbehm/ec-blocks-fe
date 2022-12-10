import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from 'src/app/core/interfaces';
import { StoreService } from 'src/app/core/services/store.service';

const PAGE_SIZE = 12;

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss'],
})
export class StoresComponent implements AfterViewInit, OnInit {
  constructor(private storeService: StoreService) {}
  page: number = 1;
  displayedColumns: string[] = ['id', 'name', 'created', 'actions'];
  stores: Store[] = [];
  dataSource = new MatTableDataSource<Store>(this.stores);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.storeService
      .getStores(this.page)
      .subscribe((response: { stores: Store[]; totalStores: number }) => {
        this.stores = response.stores;
        this.dataSource = new MatTableDataSource<Store>(this.stores);
        this.paginator.length = response.totalStores;
        this.paginator.pageSize = PAGE_SIZE;
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  changePage(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.storeService
      .getStores(this.page)
      .subscribe((response: { stores: Store[]; totalStores: number }) => {
        this.stores = response.stores;
        this.dataSource = new MatTableDataSource<Store>(this.stores);
        this.paginator.length = response.totalStores;
        this.paginator.pageSize = PAGE_SIZE;
      });
  }

  suspendStore(storeId: string) {
    this.storeService
      .suspendStore(storeId)
      .subscribe((response: { isActive: boolean }) => {
        const store = this.stores.findIndex((store) => store.id === storeId);
        this.stores[store] = { ...this.stores[store], ...response };
        this.dataSource = new MatTableDataSource<Store>(this.stores);
      });
  }

  removeStore(storeId: string) {
    this.storeService
      .removeStore(storeId)
      .subscribe((response: { isDeleted: boolean }) => {
        if (response.isDeleted) {
          this.stores = this.stores.filter((store) => store.id !== storeId);
          this.dataSource = new MatTableDataSource<Store>(this.stores);
        }
      });
  }
}
