import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello angular 10';
  description = 'holaaa';
  hero='Superman';

  onLike() {
    window.alert(`I like ${this.hero}`);
}
}
