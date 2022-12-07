import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/core/interfaces';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores-landing.component.html',
  styleUrls: ['./stores-landing.component.scss'],
})
export class StoresLandingComponent implements OnInit {
  stores: Store[] = [];
  page: number = 1;
  totalPages: number = 1;
  loading: boolean = false;

  constructor(private storeService: StoreService) {}

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  onScroll(): void {
    this.page++;
    if (this.page > this.totalPages) return;
    this.loading = true;
    this.storeService
      .getStores(this.page)
      .subscribe((response: { stores: Store[]; totalPages: number }) => {
        this.stores = [...this.stores, ...response.stores];
        this.totalPages = response.totalPages;
        this.loading = false;
      });
  }

  ngOnInit(): void {
    this.scrollToTop();
    this.loading = true;
    this.storeService
      .getStores(this.page)
      .subscribe((stores: { stores: Store[]; totalPages: number }) => {
        this.stores = stores.stores;
        this.totalPages = stores.totalPages;
        this.loading = false;
      });
  }
}
