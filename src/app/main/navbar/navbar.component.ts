import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public w: any;
  public h: any;
  constructor() {
  }

  ngOnInit() {
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    if (this.h > 450) {
      document.getElementById('mainSidenav').style.width = '15vw';
      document.getElementById('main').style.marginLeft = '15vw';
    }
  }
  @HostListener('window:resize', ['event'])
  onResize(event) {
    this.w = window.innerWidth;
    this.h = window.innerHeight;
  }
  openNav() {
    if (this.h < 750 && this.w < 450) {
      document.getElementById('mainSidenav').style.width = '45vw';
    }else if (this.h > 450) {
      document.getElementById('mainSidenav').style.width = '15vw';
      document.getElementById('main').style.marginLeft = '15vw';
    }
  }
  closeNav() {
     document.getElementById('mainSidenav').style.width = '0';
     document.getElementById('main').style.marginLeft = '0';
  }
}
