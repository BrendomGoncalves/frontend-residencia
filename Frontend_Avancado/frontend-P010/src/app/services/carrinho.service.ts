import {Injectable} from '@angular/core';
import {Produto} from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  produtos: Produto[] = [];

  adicionarAoCarrinho(produto: Produto) {
    if (this.produtos.includes(produto)) {
      this.produtos = this.produtos.map(p => {
        if (p.id === produto.id) {
          p.quantidade++;
        }
        return p;
      });
    }
    this.produtos.push(produto);
    return this.produtos;
  }

  todosProdutos() {
    return this.produtos;
  }

  limparCarrinho() {
    this.produtos = [];
    return this.produtos;
  }

  retirarDoCarrinho(id: number) {
    this.produtos = this.produtos.filter(produto => produto.id !== id);
    return this.produtos;
  }

  returnTotal() {
    let total = 0;
    this.produtos.forEach(produto => {
      total += produto.price;
    });
    return total;
  }
}
