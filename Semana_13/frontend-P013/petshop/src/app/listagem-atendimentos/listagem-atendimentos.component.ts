import { Component, OnInit } from '@angular/core';
import { AtendimentoService } from '../atendimento.service';

interface Atendimento {
  id?: number;
  cliente: string;
  pet: string;
  tipoServico: string;
  data: Date;
}

@Component({
  selector: 'app-listagem-atendimentos',
  templateUrl: './listagem-atendimentos.component.html',
  styleUrls: ['./listagem-atendimentos.component.css']
})

export class ListagemAtendimentosComponent implements OnInit {
  atendimentos: Atendimento[] = [];

  constructor(private atendimentoService: AtendimentoService) {}

  ngOnInit(): void {
    this.listarAtendimentos();
  }

  listarAtendimentos(): void {
    this.atendimentoService.listarAtendimentos().subscribe(
      atendimentos => this.atendimentos = atendimentos,
      error => console.error(error)
    );
  }
}
