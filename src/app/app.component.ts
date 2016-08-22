import { Component } from '@angular/core';
import { TestListComponent } from './test-list/test-list.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TestListComponent]
})

export class AppComponent {
  title = 'The app works!';
}
