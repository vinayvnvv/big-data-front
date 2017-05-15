import { Component, OnInit } from '@angular/core';
import { RootScope } from './../shared/root.scope';
import { NavigationService } from './../shared/common-ui.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ NavigationService ]
})
export class HeaderComponent implements OnInit {

  constructor(
      private nav: NavigationService
  	) { }


  ngOnInit() {
  }


}
