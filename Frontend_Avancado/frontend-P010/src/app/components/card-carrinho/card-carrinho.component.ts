import { Component } from '@angular/core';
import {Produto} from "../../model/Produto";
import {CarrinhoService} from "../../services/carrinho.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-card-carrinho',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './card-carrinho.component.html',
  styleUrl: './card-carrinho.component.css'
})
export class CardCarrinhoComponent {
  produtosCarrinho: Produto[] = [];
  total: number = 0;

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit() {
    this.produtosCarrinho = this.carrinhoService.todosProdutos();
    this.total = this.carrinhoService.returnTotal();
  }

  removerProduto(produtoId: number) {
    this.carrinhoService.retirarDoCarrinho(produtoId);
    this.produtosCarrinho = this.carrinhoService.todosProdutos();
    this.total = this.carrinhoService.returnTotal();
  }

  numeroAleatorio() {
    return Math.floor(Math.random() * 10);
  }
}
