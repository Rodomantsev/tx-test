import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'prj-for-test';
  counter: number = 0;

    increment() {
        this.counter++;
    }

    decrement() {
        this.counter--;
    }

}
