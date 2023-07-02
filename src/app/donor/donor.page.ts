import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.page.html',
  styleUrls: ['./donor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DonorPage implements OnInit {
disponibilidade: any;
tipoSanguineo: any;
endereco: any;
idade: any;
nome: any;
salvarDados() {
throw new Error('Method not implemented.');
}

  constructor() { }

  ngOnInit() {
  }

}
