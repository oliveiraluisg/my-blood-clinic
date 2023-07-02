import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.page.html',
  styleUrls: ['./patient.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class PatientPage implements OnInit {
salvarDados() {
throw new Error('Method not implemented.');
}
nome: any;
idade: any;
endereco: any;
telefone: any;

  constructor() {}

  ngOnInit() {
  }
  

}
