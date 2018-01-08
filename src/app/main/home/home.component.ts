import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../app.animation';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routerTransition]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // change the animation state
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}