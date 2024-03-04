import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Suino } from '../suino';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  suinos: Suino[] = [];

  constructor(public crudService: CrudService) { }

  ngOnInit() {

    this.crudService.getAll().subscribe((data: Suino[])=>{
      console.log(data);
      this.suinos = data;
    })  
  }

}