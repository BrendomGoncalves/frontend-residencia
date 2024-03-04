import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {
  suinoForm: FormGroup | undefined;
  id: string | null = null;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public crudService: CrudService,
    private route: ActivatedRoute
  ){ }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
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

  submitForm() {
    if (this.id) {
      this.crudService.update(this.id, this.suinoForm!.value).subscribe(res => {
        console.log('Product updated!')
        this.router.navigateByUrl('/crud/home/');
      });
    }
  }
}
