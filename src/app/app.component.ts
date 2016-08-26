import { Component } from '@angular/core';
import { LeftNavComponent } from './left-nav/left-nav.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [LeftNavComponent]
})

export class AppComponent {
  title = 'The app works!';
}
