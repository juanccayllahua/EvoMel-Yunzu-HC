import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosPaginaComponent } from './pages/productos-pagina/productos-pagina.component';
import { CompartidoModule } from 'src/app/compartido/compartido.module';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';


@NgModule({
  declarations: [
    ProductosPaginaComponent,
    ProductoDetalleComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    CompartidoModule
  ]
})
export class ProductosModule { }
