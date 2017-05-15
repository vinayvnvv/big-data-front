import { Component } from '@angular/core';
import { RootScope } from './shared/root.scope';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
       private rootScope: RootScope
  	) {

  }	
  title = 'app works!';

  

  
}
