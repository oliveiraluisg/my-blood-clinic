import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HistoryPage implements OnInit {
  doacoes = [
    { data: '01/01/2023', tipoSanguineo: 'A+', local: 'Hospital X' },
    { data: '05/05/2023', tipoSanguineo: 'B-', local: 'Posto de Coleta Y' },
    { data: '10/08/2023', tipoSanguineo: 'AB+', local: 'Hospital Z' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
