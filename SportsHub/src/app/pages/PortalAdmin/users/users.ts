// products.component.ts

import { Component, OnInit } from '@angular/core'; // 1. Importe OnInit
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 2. Importe o FormsModule

// 3. (Opcional, mas boa prática) Criar uma "interface" para o formato do produto
export interface Usuarios {
  id: string;
  usuario: string;
  email: string;
  tipo: string;
  cpf: string;
  nascimento: string;
}

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule // 4. Adicione o FormsModule aqui
  ],
  templateUrl: './users.html',
  styleUrl: './users.css'
})

export class Users implements OnInit { // 5. Implemente o OnInit

  public activeFilter: string | null = null;

  // 6. Objeto para guardar os valores dos filtros (ligado aos inputs com ngModel)
  public filtros = {
    id: '',
    usuario: '',
    email: '',
    tipo: '',
    cpf: '',
    nascimento: '',
  };

  // 7. Lista com TODOS os produtos (nossa fonte de dados "mestre")
  public listaUsuariosCompleta: Usuarios[] = [
    { id: '01', usuario: 'Giovani Vasconcelos', email: 'giovani@gmail.com', cpf: '123.456.789.10', tipo: 'admin', nascimento: '01/01/2000' },
    { id: '02', usuario: 'João Paulo', email: 'joao@gmail.com', cpf: '123.456.789.10', tipo: 'admin', nascimento: '15/05/1995' },
    { id: '03', usuario: 'hudson Nobaru', email: 'hudson@hotmail.com', cpf: '123.456.789.10', tipo: 'usuario', nascimento: '20/08/1988' },
    { id: '04', usuario: 'Mariana Oliveira', email: 'mari.oli@outlook.com', cpf: '4123.456.789.10', tipo: 'usuario', nascimento: '10/11/2001' },
    { id: '05', usuario: 'Roberto Ferreira', email: 'beto.ferreira@gmail.com', cpf: '123.456.789.10', tipo: 'usuario', nascimento: '02/02/1992' },
    { id: '06', usuario: 'Juliana Costa', email: 'ju.costa@yahoo.com.br', cpf: '123.456.789.10', tipo: 'usuario', nascimento: '28/09/1997' },
    { id: '07', usuario: 'Felipe Almeida', email: 'felipe.almeida@gmail.com', cpf: '123.456.789.10', tipo: 'usuario', nascimento: '14/07/1985' },
  ];

  // 8. Lista que será MOSTRADA na tela (ela que será filtrada)
  public listaUsuariosFiltrada: Usuarios[] = [];

  // 9. ngOnInit é uma função que roda uma vez quando o componente é iniciado
  ngOnInit(): void {
    // No início, a lista filtrada é igual à lista completa
    this.listaUsuariosFiltrada = [...this.listaUsuariosCompleta];
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
    let usuariosFiltrados = [...this.listaUsuariosCompleta];

    // Função auxiliar para comparar texto ignorando maiúsculas/minúsculas
    const comparar = (textoBase: string, textoFiltro: string) => {
      return textoBase.toLowerCase().includes(textoFiltro.toLowerCase());
    };

    // Aplicamos um filtro de cada vez
    // (Vamos checar campo por campo do nosso objeto 'filtros')

    if (this.filtros.id) {
      usuariosFiltrados = usuariosFiltrados.filter(p => comparar(p.id, this.filtros.id));
    }
    if (this.filtros.usuario) {
      usuariosFiltrados = usuariosFiltrados.filter(p => comparar(p.usuario, this.filtros.usuario));
    }
    if (this.filtros.email) {
      usuariosFiltrados = usuariosFiltrados.filter(p => comparar(p.email, this.filtros.email));
    }
    if (this.filtros.tipo) {
      usuariosFiltrados = usuariosFiltrados.filter(p => comparar(p.tipo, this.filtros.tipo));
    }
    if (this.filtros.cpf) {
      usuariosFiltrados = usuariosFiltrados.filter(p => comparar(p.cpf, this.filtros.cpf));
    }
    if (this.filtros.nascimento) {
      usuariosFiltrados = usuariosFiltrados.filter(p => comparar(p.nascimento, this.filtros.nascimento));
    }


    // No final, atualizamos a lista que o HTML está "vendo"
    this.listaUsuariosFiltrada = usuariosFiltrados;
  }
}