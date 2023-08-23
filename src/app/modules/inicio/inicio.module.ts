import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioPaginaComponent } from './pages/inicio-pagina/inicio-pagina.component';
import { CompartidoModule } from 'src/app/compartido/compartido.module';

@NgModule({
  declarations: [
    InicioPaginaComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    CompartidoModule
  ]
})
export class InicioModule { }
