import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPaginaComponent } from './pages/inicio-pagina/inicio-pagina.component';
const routes: Routes = [
  { 
    path:'',
    loadChildren: () => import('../productos/productos.module').then(m=>m.ProductosModule)
  },
  { 
    path:'compras',
    loadChildren: () => import('../miscompras/miscompras.module').then(m=>m.MiscomprasModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
