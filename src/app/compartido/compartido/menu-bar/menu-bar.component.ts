import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductDataService } from 'src/app/services/product-data.service';
interface SearchResult {
  id:string;
  nombre: string;
  imageUrl: string;
}

export interface Product {
  id: number;
  nombre: string;
  precio: number;
  imageUrl: string;
  cantidad: number; // Nueva propiedad para la cantidad de productos en el carrito
  importe: number; // Nueva propiedad para el importe total del producto en el carrito
  propietario:string;
}




@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {

  inputText = '';
  characterCount = 0;
  searchData: SearchResult[] = [];
  searchResults: SearchResult[] = [];
  isResultsVisible = false;
  carrito: Product[] = [];
  cantidadProd = 0; 
  carritoSubscription: Subscription = new Subscription();


  constructor(private router: Router, private productService: ProductDataService, private carritoServ:CarritoService) {
    this.searchData = this.productService.getProducts().map(product => {
      return { id:product.id, nombre: product.nombre, imageUrl: product.imageUrl };
    });
    // this.carrito = this.carritoServ.getCarrito();
    // this.cantidadProd = this.carrito.length;

   
  }

  ngOnInit(): void {
    this.carrito = this.carritoServ.getCarrito();
    this.cantidadProd = this.carrito.length;

     // Suscribirse al Observable del carrito para actualizar la cantidad
     this.carritoSubscription = this.carritoServ.getCarritoObservable().subscribe(nuevoCarrito => {
      this.carrito = nuevoCarrito;
      this.cantidadProd = nuevoCarrito.length;

      console.log(this.cantidadProd);
      
    });
    this.carrito = this.carritoServ.getCarrito();
    this.cantidadProd = this.carrito.length;

  }

  onSearchInput(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.searchResults = this.searchData.filter(item => item.nombre.toLowerCase().includes(searchTerm));
    this.isResultsVisible = true;
    this.characterCount = searchTerm.length;
  }

  onSearchBlur() {
    this.isResultsVisible = false;
  }

  onResultClick(result: SearchResult) {
    this.router.navigate(['/producto', result.id]);
    this.isResultsVisible = false;
  }
  // ngOnDestroy(): void {
  //   this.carritoSubscription.unsubscribe();
  // }
}
