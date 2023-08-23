import { Injectable } from '@angular/core';
// id: number;
// nombre: string;
// precio: number;
// imageUrl: string;
// cantidad: number;  
// importe: number; 
@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  private products: any[] = [
    // { id: 1, name: 'Producto 1', category: 'Electrónicos' },
    // { id: 2, name: 'Producto 2', category: 'Ropa' }, 
    { id: 1,nombre: 'Queso', imageUrl: '/assets/quesoayaviri.jpeg' ,precio: 20,cantidad:1,importe:20},
    { id: 2,nombre: 'Torta de Quinua', imageUrl: '/assets/torta.jpeg' ,precio: 25,cantidad:1,importe:25},
    { id: 3,nombre: 'Miel de abeja', imageUrl: '/assets/miel.jpg',precio: 30,cantidad:1,importe:30 },
    { id: 4,nombre: 'Moraya', imageUrl: '/assets/moraya.jpg' ,precio: 15,cantidad:1,importe:15},
    { id: 5,nombre: 'Yogurt', imageUrl: '/assets/yogurt.jpg',precio: 8,cantidad:1,importe:8 },
    { id: 6,nombre: 'Pollo a la brasa', imageUrl: '/assets/polloalabrasa.jpeg',precio: 12,cantidad:1,importe:12 }
  ];
  constructor() { }

  getProducts(): any[] {
    return this.products;
  }
  getProductById(id: number): any | undefined {
    return this.products.find(product => product.id === id);
  }
  searchProductsByCategory(category: string): any[] {
    return this.products.filter(product => product.category === category);
  }
}
