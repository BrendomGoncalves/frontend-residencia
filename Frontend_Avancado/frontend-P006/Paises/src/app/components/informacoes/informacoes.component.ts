import { Component } from '@angular/core';
import { Pais } from '../../pais';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-informacoes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './informacoes.component.html',
  styleUrl: './informacoes.component.css'
})
export class InformacoesComponent {

  paisForm: Pais = {} as Pais;

  ngOnInit() {
    this.novoPais();
  }

  novoPais() {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        this.paisForm = data[randomIndex];
      });
  }

  objectKeys(obj: {}) {
    return Object.keys(obj);
  }
}
