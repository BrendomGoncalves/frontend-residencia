import { Component } from '@angular/core';
import {Produto} from "../../model/Produto";
import {NgForOf} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarrinhoService} from "../../services/carrinho.service";

@Component({
  selector: 'app-card-compras',
  standalone: true,
  imports: [
    NgForOf, HttpClientModule
  ],
  templateUrl: './card-compras.component.html',
  styleUrl: './card-compras.component.css'
})
export class CardComprasComponent {
  produtos: Produto[] = []
  private apiUrl = 'https://fakestoreapi.com/products?limit=10';

  constructor(private http: HttpClient, private Carrinho: CarrinhoService) {}

  ngOnInit() {
    this.atualizarProdutos();
  }

  atualizarProdutos(): void {
    this.getProdutos().subscribe(produtos => this.produtos = produtos);
  }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  colocarNoCarrinho(produto: Produto){
    this.Carrinho.adicionarAoCarrinho(produto)
  }
}
