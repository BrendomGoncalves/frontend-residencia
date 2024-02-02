import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-numberviewer',
  templateUrl: './numberviewer.component.html',
  styleUrls: ['./numberviewer.component.css']
})
export class NumberViewerComponent implements OnInit {
  numbers: number[] = [];

  constructor(private numberService: NumberService) { }

  ngOnInit(): void {
    this.numberService.getNumbers().subscribe(num => this.numbers.push(num));
  }
}