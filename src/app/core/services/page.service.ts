import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';
import { Observable } from 'rxjs';
import { Page } from '../interfaces/page.interface';
import { environment } from 'src/environments/environment';

const API_URL = `${environment.backendURL}page`;
@Injectable({
  providedIn: 'root',
})
export class PageService {
  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService,
  ) {}

  getPagesByStore(): Observable<Page[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.tokenStorageService.getToken(),
    });
    return this.http.get<Page[]>(`${API_URL}/default/store-pages`, { headers });
  }

  getOnePage(id: string): Observable<Page> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.tokenStorageService.getToken(),
    });
    return this.http.get<Page>(`${API_URL}/${id}`, { headers });
  }

  createPage(page: Page): Observable<Page> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.tokenStorageService.getToken(),
    });
    return this.http.post<Page>(API_URL, page, { headers });
  }

  updatePage(id: string | undefined, page: Page): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.tokenStorageService.getToken(),
    });
    return this.http.patch<any>(`${API_URL}/${id}`, page, { headers });
  }

  removePage(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.tokenStorageService.getToken(),
    });
    return this.http.delete(`${API_URL}/${id}`, { headers });
  }
}
