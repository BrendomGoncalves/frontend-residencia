import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CardComprasComponent} from "./components/card-compras/card-compras.component";
import {CardCarrinhoComponent} from "./components/card-carrinho/card-carrinho.component";
import {CardSubtotalComponent} from "./components/card-subtotal/card-subtotal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComprasComponent, CardCarrinhoComponent, CardSubtotalComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-P007';
}
