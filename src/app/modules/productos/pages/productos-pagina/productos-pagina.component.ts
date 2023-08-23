import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDataService } from 'src/app/services/product-data.service';
interface SearchResult {
  id:string;
  nombre: string;
  imageUrl: string;
}

@Component({
  selector: 'app-productos-pagina',
  templateUrl: './productos-pagina.component.html',
  styleUrls: ['./productos-pagina.component.css']
})
export class ProductosPaginaComponent {
  products: any[];

  constructor(private router: Router,private productService: ProductDataService) {
    this.products = this.productService.getProducts();
  }
  onResultClick(result: SearchResult) {
    
    this.router.navigate(['/producto', result.id]);
     
  }

}
