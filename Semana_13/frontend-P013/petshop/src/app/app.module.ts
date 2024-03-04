import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CadastroAtendimentoComponent } from './cadastro-atendimento/cadastro-atendimento.component';
import { ListagemAtendimentosComponent } from './listagem-atendimentos/listagem-atendimentos.component';
// import { EdicaoAtendimentoComponent } from './edicao-atendimento/edicao-atendimento.component';
// import { DetalheAtendimentoComponent } from './detalhe-atendimento/detalhe-atendimento.component';

const routes: Routes = [
  { path: 'cadastro-atendimento', component: CadastroAtendimentoComponent },
  { path: 'listagem-atendimentos', component: ListagemAtendimentosComponent },
  // { path: 'edicao-atendimento/:id', component: EdicaoAtendimentoComponent },
  // { path: 'detalhe-atendimento/:id', component: DetalheAtendimentoComponent },
  { path: '', redirectTo: '/listagem-atendimentos', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    CadastroAtendimentoComponent,
    ListagemAtendimentosComponent,
    // EdicaoAtendimentoComponent,
    // DetalheAtendimentoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
