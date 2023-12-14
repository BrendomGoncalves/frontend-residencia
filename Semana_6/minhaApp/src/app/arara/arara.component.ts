import { Component } from '@angular/core';

@Component({
  selector: 'app-arara',
  templateUrl: './arara.component.html',
  styleUrl: './arara.component.css'
})

export class AraraComponent {
  nome:string = "Arara Azul";
  qClick = 0;
  qHover = 0;

  public onClick(): void {
    this.qClick++;
  }
  public onHover(): void{
    this.qHover++;
  }
}