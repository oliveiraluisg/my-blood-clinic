import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.page.html',
  styleUrls: ['./patient.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PatientPage implements OnInit {
  photoUrl: string | undefined = undefined; // Inicialização da propriedade photoUrl

  nome: any;
  idade: any;
  endereco: any;
  telefone: any;

  constructor() {}

  async takePhoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
    });

    // Verifica se a imagem capturada está disponível
    if (image && image.webPath) {
      this.photoUrl = image.webPath;
    }
  }

  salvarDados() {
    window.location.reload();
  }

  ngOnInit() {
  }
}
