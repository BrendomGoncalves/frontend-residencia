import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import firebase from 'firebase/app';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  suinoForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.suinoForm = this.formBuilder.group({
      brincoAnimal: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      brincoPai: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      brincoMae: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      dataNascimento: ['', Validators.required],
      dataSaida: ['', Validators.required],
      status: ['', [Validators.required, Validators.pattern("^(Ativo|Vendido|Morto)$")]],
      sexo: ['', [Validators.required, Validators.pattern("^(M|F)$")]]
    });
  }
  onSubmit() {
    if (this.suinoForm.valid) {
      firebase.database().ref('/suinos').push(this.suinoForm.value)
        .then((response: any) => {
          var userSuino = [
            this.suinoForm.value.brincoAnimal,
            localStorage.getItem('authToken')
          ]
          firebase.database().ref('/usersuinos').push(userSuino);
          console.log('Sucesso!', response);
          this.suinoForm.reset();
          alert('Suíno cadastrado com sucesso!');
        })
        .catch((error: any) => {
          console.error('Erro!', error);
        });
    } else {
      console.log('Formulário inválido!');
    }
  }
}
