import { CommonModule } from '@angular/common';
import { Component, Input, input, output } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-left-sidebar',   
  standalone: true,
  imports: [RouterModule, CommonModule, NgOptimizedImage],
  templateUrl: './left-sidebar.html',
  styleUrls: ['./left-sidebar.css'],
})

export class LeftSidebar {
    isLeftSidebarCollapsed = input(false);
  leftsidebarState: boolean = false;
  // Recebe se o menu está colapsado (true = fechado)

  // Emite evento para o componente pai quando o menu abre/fecha
  changeIsLeftSidebarCollapsed = output<boolean>();

  // Lista dos itens do menu
  items = [
    {
      routeLink: 'dashboard',
      icon: 'fal fa-chart-bar',
      label: 'Relatório Geral',
    },
    {
      routeLink: 'Relatório-vendas', 
      icon: 'fal fa-money-bill-wave', 
      label: 'Relatório de Vendas',},
    {
      routeLink: 'products',
      icon: 'fal fa-box-open',
      label: 'Produtos',
    },
    {
      routeLink: 'ofertas',
      icon: 'fal fa-tags',
      label: 'Ofertas',
    },
    {
      routeLink: 'cupons',
      icon: 'fal fa-ticket-alt',
      label: 'Cupons',
    },
    {
      routeLink: 'usuarios',
      icon: 'fal fa-users',
      label: 'Usuários',
    },
    {
      routeLink: 'nome-usuario',
      icon: 'fal fa-user-circle',
      label: 'Nome Usuário',
    },
  ];

  // Alterna o estado do menu lateral (abre/fecha)
  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  // Fecha o menu (modo responsivo, por exemplo)
  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }

  // Nome do usuário (pode vir futuramente de um service)
  userName = 'Nome Usuário';
}
