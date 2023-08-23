import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosPaginaComponent } from './pages/productos-pagina/productos-pagina.component';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';

const routes: Routes = [
  {
    path: '',
    component: ProductosPaginaComponent

  },
  {
    path: 'producto/:id',
    component: ProductoDetalleComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
