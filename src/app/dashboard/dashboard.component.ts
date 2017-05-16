import { Component, OnInit } from '@angular/core';
import { RootScope } from './../shared/root.scope';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
          private rootScope: RootScope
  	) { }

  ngOnInit() {
  }

}
