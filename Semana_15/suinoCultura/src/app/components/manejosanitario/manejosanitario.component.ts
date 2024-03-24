import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-manejosanitario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manejosanitario.component.html',
  styleUrl: './manejosanitario.component.css'
})
export class ManejosanitarioComponent {
  suinos: any[] = [];
  words: any[] = [];

  ngOnInit() {
    firebase.database().ref('/suinos').on('value', (snapshot) => {
      this.suinos = [];
      snapshot.forEach((childSnapshot) => {
        let suino = childSnapshot.val();
        suino.key = childSnapshot.key;
        this.suinos.push({
          key: childSnapshot.key,
          brincoAnimal: suino['brincoAnimal'],
          brincoPai: suino['brincoPai'],
          brincoMae: suino['brincoMae'],
          dataNascimento: suino['dataNascimento'],
          dataSaida: suino['dataSaida'],
          sexo: suino['sexo'],
          status: suino['status']
        });
      });
    });
  };

  

  storeWord(event: any) {
    const word = event.target.value;
    if (word && !this.words.includes(word)) {
      this.words.push(word);
      event.target.value = '';
    }
  }
}
