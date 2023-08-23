import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';
export interface Product {
  id: number;
  nombre: string;
  precio: number;
  imageUrl: string;
  cantidad: number; // Nueva propiedad para la cantidad de productos en el carrito
  importe: number; // Nueva propiedad para el importe total del producto en el carrito
}
@Component({
  selector: 'app-compras-pagina',
  templateUrl: './compras-pagina.component.html',
  styleUrls: ['./compras-pagina.component.css']
})
export class ComprasPaginaComponent {

  carrito: Product[] = [];
  importeTotal: number = 0; 


  constructor(private carritoService: CarritoService, private router: Router) { }

  ngOnInit(): void {

    this.carrito = this.carritoService.getCarrito();
    this.calcularImporteTotal();
  }

  agregarAlCarrito(producto: Product) {

    this.carritoService.agregarProducto(producto);
    this.calcularImporteTotal();
  }

  eliminarDelCarrito(index: number, productoId: number) {

    this.carrito.splice(index, 1);

    this.carritoService.eliminarProducto(productoId);
    this.calcularImporteTotal();

  }
  actualizarCantidad(producto: Product) {
    const productoEnCarrito = this.carrito.find(p => p.id === producto.id);
    if (productoEnCarrito) {
      const cantidadAnterior = productoEnCarrito.cantidad;
      productoEnCarrito.cantidad = producto.cantidad;
      productoEnCarrito.importe = producto.precio * producto.cantidad;

      // Actualizar la cantidad en el servicio del carrito
      this.carritoService.actualizarProducto(productoEnCarrito);
    }
    this.calcularImporteTotal();
  } 

  calcularImporteTotal() {
    this.importeTotal = this.carrito.reduce((total, producto) => total + producto.importe, 0);
  }
  redirectToPagoYConfirmar() {
    this.router.navigate(['/compras/pagaryConfirmar']);
  }
}
