import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmarcompra',
  templateUrl: './confirmarcompra.component.html',
  styleUrls: ['./confirmarcompra.component.css']
})
export class ConfirmarcompraComponent {

  constructor( private router:Router) { }

  redirectToPagoYConfirmar() {
    this.router.navigate(['/compras/comprarealizada']);
  }

}
