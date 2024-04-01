import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Components
import { InformacoesComponent } from './components/informacoes/informacoes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InformacoesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Paises';
}
