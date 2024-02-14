import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './types/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  private apiUrl = environment.apiUrl;
  private http = inject(HttpClient);

  fetchProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + '/products');
  }
}
