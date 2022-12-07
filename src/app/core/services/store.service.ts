import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Store } from '../interfaces';
import { TokenStorageService } from './token-storage.service';

const API_URL = environment.backendURL + 'store/';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService,
  ) {}

  getStores(page: number): Observable<{
    stores: Store[];
    totalPages: number;
    totalStores: number;
  }> {
    return this.http.get(API_URL, {
      params: { page },
    }) as Observable<{
      stores: Store[];
      totalPages: number;
      totalStores: number;
    }>;
  }

  suspendStore(storeId: string): Observable<{ isActive: boolean }> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.tokenStorageService.getToken(),
    });
    return this.http.patch(
      API_URL + storeId + '/?action=suspend',
      {},
      { headers },
    ) as Observable<{ isActive: boolean }>;
  }

  removeStore(storeId: string): Observable<{ isDeleted: boolean }> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.tokenStorageService.getToken(),
    });
    return this.http.delete(API_URL + storeId, { headers }) as Observable<{
      isDeleted: boolean;
    }>;
  }
}
