import { Component } from '@angular/core';
import { AtendimentoService } from '../atendimento.service';

interface Atendimento {
  id?: number;
  cliente: string;
  pet: string;
  tipoServico: string;
  data: Date;
}

@Component({
  selector: 'app-cadastro-atendimento',
  templateUrl: './cadastro-atendimento.component.html',
  styleUrls: ['./cadastro-atendimento.component.css']
})

export class CadastroAtendimentoComponent {
  novoAtendimento: Atendimento = { cliente: '', pet: '', tipoServico: '', data: new Date() };

  constructor(private atendimentoService: AtendimentoService) {}

  cadastrar(): void {
    this.atendimentoService.cadastrarAtendimento(this.novoAtendimento)
      .subscribe(
        () => {
          console.log('Atendimento cadastrado com sucesso!');
          // Limpar o formulário após o cadastro
          this.novoAtendimento = { cliente: '', pet: '', tipoServico: '', data: new Date() };
        },
        error => console.error('Erro ao cadastrar atendimento:', error)
      );
  }
}
