import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiscomprasRoutingModule } from './miscompras-routing.module';
import { ComprasPaginaComponent } from './pages/compras-pagina/compras-pagina.component';
import { FormsModule } from '@angular/forms';
import { ConfirmarcompraComponent } from './pages/confirmarcompra/confirmarcompra.component';
import { RealizadoPageComponent } from './pages/realizado-page/realizado-page.component';


@NgModule({
  declarations: [
    ComprasPaginaComponent,
    ConfirmarcompraComponent,
    RealizadoPageComponent
  ],
  imports: [
    CommonModule,
    MiscomprasRoutingModule,
    FormsModule
  ]
})
export class MiscomprasModule { }
