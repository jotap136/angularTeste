// products.component.ts

import { Component, OnInit } from '@angular/core'; // 1. Importe OnInit
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LeftSidebar } from "../left-sidebar/left.sidebar"; // 2. Importe o FormsModule

// 3. (Opcional, mas boa prática) Criar uma "interface" para o formato do produto
export interface Produto {
  id: string;
  produto: string;
  marca: string;
  preco: string;
  categoria: string;
  genero: string;
  cor: string;
}

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule // 4. Adicione o FormsModule aqui
    ,
    LeftSidebar
],
  templateUrl: './products.html',
  styleUrl: './products.css'
})

export class Products implements OnInit { 
  public activeFilter: string | null = null;

  // 6. Objeto para guardar os valores dos filtros (ligado aos inputs com ngModel)
  public filtros = {
    id: '',
    produto: '',
    marca: '',
    preco: '',
    categoria: '',
    genero: '',
    cor: ''
  };

  // 7. Lista com TODOS os produtos (nossa fonte de dados "mestre")
  public listaProdutosCompleta: Produto[] = [
    { id: '01', produto: 'Camisa Barcelona', marca: 'Nike', preco: 'R$200,00', categoria: 'Futebol', genero: 'Masculino', cor: 'azul' },
    { id: '02', produto: 'Camisa Lakers', marca: 'Adidas', preco: 'R$200,00', categoria: 'Basquete', genero: 'Masculino', cor: 'amarela' },
    { id: '03', produto: 'Tênis Olympikus', marca: 'New Balance', preco: 'R$250,00', categoria: 'Tênis', genero: 'Masculino', cor: 'amarela' },
    { id: '04', produto: 'Bola de Futebol', marca: 'Nike', preco: 'R$150,00', categoria: 'Futebol', genero: 'Masculino', cor: 'amarela' },
    { id: '05', produto: 'Bola de Basquete', marca: 'Adidas', preco: 'R$150,00', categoria: 'Basquete', genero: 'Masculino', cor: 'amarela' },
    { id: '06', produto: 'Chuteira Nike', marca: 'calçados', preco: 'R$100,00', categoria: 'Basquete', genero: 'Masculino', cor: 'amarela' }
  ];

  // 8. Lista que será MOSTRADA na tela (ela que será filtrada)
  public listaProdutosFiltrada: Produto[] = [];
sidebarState: boolean | undefined;

  // 9. ngOnInit é uma função que roda uma vez quando o componente é iniciado
  ngOnInit(): void {
    // No início, a lista filtrada é igual à lista completa
    this.listaProdutosFiltrada = [...this.listaProdutosCompleta];
  }

  toggleFilter(filterName: string): void {
    if (this.activeFilter === filterName) {
      this.activeFilter = null;
    } else {
      this.activeFilter = filterName;
    }
  }

  // 10. A MÁGICA: Função que aplica os filtros
  aplicarFiltros(): void {
    // Começamos com a lista completa
    let produtosFiltrados = [...this.listaProdutosCompleta];

    // Função auxiliar para comparar texto ignorando maiúsculas/minúsculas
    const comparar = (textoBase: string, textoFiltro: string) => {
      return textoBase.toLowerCase().includes(textoFiltro.toLowerCase());
    };

    // Aplicamos um filtro de cada vez
    // (Vamos checar campo por campo do nosso objeto 'filtros')

    if (this.filtros.id) {
      produtosFiltrados = produtosFiltrados.filter(p => comparar(p.id, this.filtros.id));
    }
    if (this.filtros.produto) {
      produtosFiltrados = produtosFiltrados.filter(p => comparar(p.produto, this.filtros.produto));
    }
    if (this.filtros.marca) {
      produtosFiltrados = produtosFiltrados.filter(p => comparar(p.marca, this.filtros.marca));
    }
    if (this.filtros.preco) {
      produtosFiltrados = produtosFiltrados.filter(p => comparar(p.preco, this.filtros.preco));
    }
    if (this.filtros.categoria) {
      produtosFiltrados = produtosFiltrados.filter(p => comparar(p.categoria, this.filtros.categoria));
    }
    if (this.filtros.genero) {
      produtosFiltrados = produtosFiltrados.filter(p => comparar(p.genero, this.filtros.genero));
    }
    if (this.filtros.cor) {
      produtosFiltrados = produtosFiltrados.filter(p => comparar(p.cor, this.filtros.cor));
    }

    // No final, atualizamos a lista que o HTML está "vendo"
    this.listaProdutosFiltrada = produtosFiltrados;
  }
}