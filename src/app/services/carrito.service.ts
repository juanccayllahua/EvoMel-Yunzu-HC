import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
export interface Product {
  id: number;
  nombre: string;
  precio: number;
  imageUrl: string;
  cantidad: number; // Nueva propiedad para la cantidad de productos en el carrito
  importe: number; // Nueva propiedad para el importe total del producto en el carrito
  propietario:string;
}
@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito: Product[] = [];

  private carritoSubject = new BehaviorSubject<Product[]>([]);

  constructor() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      this.carrito = JSON.parse(carritoGuardado);
    }
  }

  getCarrito(): Product[] {
    return this.carrito;
  }

  agregarProducto(producto: Product): void {
    const productoExistente = this.carrito.find(p => p.id === producto.id);

    if (productoExistente) {
      // Actualizar cantidad e importe
      productoExistente.cantidad += producto.cantidad;
      productoExistente.importe += producto.importe;
    } else {
      // Agregar nuevo producto al carrito
      this.carrito.push(producto);
    }

    this.actualizarCarritoLocalStorage();
    this.emitirCambiosEnCarrito()
  }

  eliminarProducto(id: number): void {
    this.carrito = this.carrito.filter(p => p.id !== id);
    this.actualizarCarritoLocalStorage();
    this.emitirCambiosEnCarrito()
  }

  private actualizarCarritoLocalStorage(): void {
    localStorage.setItem('carrito', JSON.stringify(this.carrito));

     
    
  }

  getCarritoObservable(): Observable<Product[]> {
    return this.carritoSubject.asObservable();
  }

   

  actualizarProducto(productoActualizado: Product): void {
    const index = this.carrito.findIndex(p => p.id === productoActualizado.id);

    if (index !== -1) {
      this.carrito[index] = productoActualizado;
      this.actualizarCarritoLocalStorage();
    }
  }
  // Método para emitir cambios en el carrito
  emitirCambiosEnCarrito() {
    this.carritoSubject.next(this.carrito);
  }
}
