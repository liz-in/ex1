import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';
  count = 0;
  constructor() {
  }
  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title = 'The Will Will Web';
    }
  }
  checkWord($event: KeyboardEvent) {
    if ($event.key === 'Escape') {
      this.countWord($event.target as HTMLInputElement, true);
    } else {
      this.countWord($event.target as HTMLInputElement, false);
    }
  }
  countWord(element: HTMLInputElement, clear: boolean) {
    if (clear) {
      element.value = '';
      this.count = 0;
    } else {
      this.count = element.value.length;
    }
  }
}
