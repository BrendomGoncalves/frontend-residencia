import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent implements OnInit {
  formExercicio: FormGroup;
  constructor() {
    this.formExercicio = new FormGroup({
      'EstacaoClimatica': new FormControl(),
      'EmailNotificacao': new FormControl(),
      'Localizacao': new FormControl(),
      'StatusInstalacao': new FormControl(),
    });
  }
  ngOnInit(): void {}
}
