import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  suinoForm: FormGroup | undefined;

  ngOnInit() {
      this.suinoForm = this.fb.group({
      brincoAnimal: [''], 
      brincoPai: [''],
      brincoMae: [''],
      dataNascimento: [''],
      dataSaida: [''],
      status: [''],
      sexo: ['']
    })
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public crudService: CrudService
  ){ }
  submitForm() {
    this.crudService.create(this.suinoForm!.value).subscribe(res => {
      console.log('Product created!')
      this.router.navigateByUrl('/crud/home/'));
  }

}