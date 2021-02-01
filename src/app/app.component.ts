import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'translate-app';
  text = '';

  inputHandler(event: any) {
    this.text = event.target.value;
  }
  translateText() {

  }
}


