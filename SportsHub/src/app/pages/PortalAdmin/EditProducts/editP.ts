import { Component, OnInit } from '@angular/core'; // 1. Importe OnInit
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 2. Importe o FormsModule

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule // 4. Adicione o FormsModule aqui
  ],
  templateUrl: './editP.html',
  styleUrl: './editP.css'
})

export class EditProducts{

}
