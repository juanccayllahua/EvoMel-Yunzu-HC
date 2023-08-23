import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasPaginaComponent } from './pages/compras-pagina/compras-pagina.component';
import { ConfirmarcompraComponent } from './pages/confirmarcompra/confirmarcompra.component';
import { RealizadoPageComponent } from './pages/realizado-page/realizado-page.component';

const routes: Routes = [
  {
    path: '',
    component: ComprasPaginaComponent
  },
  {
    path: 'pagaryConfirmar',
    component: ConfirmarcompraComponent
  },
  { path: 'comprarealizada', component: RealizadoPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiscomprasRoutingModule { }
