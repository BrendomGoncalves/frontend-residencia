import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import firebase from 'firebase/app';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, FormsModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  editarSuino: FormGroup | any;
  suinos: any[] = [];
  suinoSelecionado: any = {};
  suinoKeyEditar: string = '';

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.editarSuino = this.formBuilder.group({
      brincoAnimal: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      brincoPai: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      brincoMae: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      dataNascimento: ['', Validators.required],
      dataSaida: ['', Validators.required],
      status: ['', [Validators.required, Validators.pattern("^(Ativo|Vendido|Morto)$")]],
      sexo: ['', [Validators.required, Validators.pattern("^(M|F)$")]]
    });
  }

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
  }

  excluir(key: string) {
    firebase.database().ref('/suinos').child(key).remove();
  }
  onSubmit() {
    let suinoParaSalvar = { ...this.editarSuino.value };
    delete suinoParaSalvar._onCollectionChange;
    if (this.suinoKeyEditar) {
      firebase.database().ref('/suinos/' + this.suinoKeyEditar).set(suinoParaSalvar)
        .then(() => console.log('Suíno atualizado com sucesso'))
        .catch((error) => console.error('Erro ao atualizar suíno: ', error));
    } else {
      alert('Ocorreu um erro ao editar. Tente novamente...');
    }
  }
  selecionarSuino(suino: any) {
    this.suinoKeyEditar = suino.key;
    this.suinoSelecionado = suino;
  }
}
