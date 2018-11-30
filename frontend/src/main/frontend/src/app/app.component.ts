import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng2boot';
  categories = [];

  constructor() {
    this.categories.push(this.method('Seda', '35'))
    this.categories.push(this.method('Gokhan', '31'))
  }

  method(x:string, y:string ) {
    return {'x': x, 'y' : y}
  }
}
