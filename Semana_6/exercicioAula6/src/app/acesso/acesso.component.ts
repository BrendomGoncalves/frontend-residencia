import { Component } from '@angular/core';
@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrl: './acesso.component.css'
})
export class AcessoComponent {

  txtEventoParametro:string = "";
  resposta:string = "";
  acessos: Array<string> = ["root", "admin", "visitante"];
  
  public validandoInput(event: Event){
    this.txtEventoParametro = (<HTMLInputElement>event.target).value;
    if(this.acessos.includes(this.txtEventoParametro)){
      (<HTMLButtonElement>document.getElementById("btnValidar")).disabled = false;
    }else{
      (<HTMLButtonElement>document.getElementById("btnValidar")).disabled = true;
      (<HTMLParagraphElement>document.getElementById("resposta")).innerText = "";
    }
  }

  public validar(){
    (<HTMLButtonElement>document.getElementById("txtEventoParametro")).value = "";
    (<HTMLParagraphElement>document.getElementById("resposta")).innerText = "Bem vindo usuário " + this.txtEventoParametro + "! Você está logado."
  }
}