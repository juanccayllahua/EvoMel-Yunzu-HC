
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPaginaComponent } from './modules/inicio/pages/inicio-pagina/inicio-pagina.component';

const routes: Routes = [
  {
    path:'',
    component:InicioPaginaComponent,
    loadChildren: () => import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
   } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
