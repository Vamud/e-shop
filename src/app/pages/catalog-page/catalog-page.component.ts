import { Component, OnInit, inject } from '@angular/core';
import { CatalogService } from './catalog.service';
import { Product } from './types/product.interface';

@Component({
  selector: 'app-catalog-page',
  standalone: true,
  imports: [],
  templateUrl: './catalog-page.component.html',
  styleUrl: './catalog-page.component.css'
})
export class CatalogPageComponent implements OnInit {
  private catalogService = inject(CatalogService);


  ngOnInit(): void {
      this.catalogService.fetchProduct().subscribe((data: Product[]) => {
        console.log(data);
      });
  }
}
