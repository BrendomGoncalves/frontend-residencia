import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ExercicioRotas';
  rota: string = '';
  inputText: string = '';
  constructor(private rotas:Router, private rotaAtiva: ActivatedRoute){}

  rotaHome(): void{
    this.rotas.navigate(['/home']);
  }
  rotaSobre(): void{
    this.rotas.navigate(['/sobre']);
  }
  rotaServicos(): void{
    this.rotas.navigate(['/servicos']);
  }
}