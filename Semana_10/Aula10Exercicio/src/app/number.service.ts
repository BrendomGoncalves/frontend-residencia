import { Injectable } from '@angular/core';
import { Observable, range } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  getNumbers(): Observable<number> {
    return range(1, 100);
  }
}