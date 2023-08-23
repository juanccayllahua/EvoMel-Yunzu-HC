import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductDataService } from 'src/app/services/product-data.service';
export interface Product {
  id: number;
  nombre: string;
  precio: number;
  imageUrl: string;
  cantidad: number; // Nueva propiedad para la cantidad de productos en el carrito
  importe: number; // Nueva propiedad para el importe total del producto en el carrito
}
@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent {
  product: any;
  id: string | null = null;
  carrito: Product[] = [];


  constructor(private route: ActivatedRoute, private productService: ProductDataService,
    private carritoService: CarritoService) { }


  ngOnInit(): void {
 
    this.route.paramMap.subscribe(params => {

      this.id = params.get('id');

      if (this.id !== null) {
        const productId = +this.id; // Convierte this.id a un número usando el operador de suma unaria
        this.product = this.productService.getProductById(productId);
      }
    });
  }
  agregarAlCarrito(producto: Product) {
    console.log(producto);
    
    // Lógica para crear el producto y luego agregarlo al carrito
    this.carritoService.agregarProducto(producto);
  }

   
}
