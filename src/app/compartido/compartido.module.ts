import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './compartido/menu-bar/menu-bar.component';
import { FormsModule } from '@angular/forms';
import { BannerImageComponent } from './compartido/banner-image/banner-image.component';
import { ProductosListaComponent } from './compartido/productos-lista/productos-lista.component';



@NgModule({
  declarations: [
    MenuBarComponent,
    BannerImageComponent,
    ProductosListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MenuBarComponent,
    BannerImageComponent,
    ProductosListaComponent
  ],
})
export class CompartidoModule { }
