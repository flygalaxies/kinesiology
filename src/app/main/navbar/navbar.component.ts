import { Component, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public w: any;
  public h: any;
  constructor(meta: Meta, title: Title, @Inject(PLATFORM_ID) private platformId: Object) {
    title.setTitle('Kinesiology');
    meta.addTags([
      { name: 'author', content: 'kinesiologyPractice.co.za' },
      { name: 'keywords', content: 'Kinesiology Practice, Kinesiology' },      
    ])
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.w = window.innerWidth;
      this.h = window.innerHeight;
      if (this.h > 450) {
        document.getElementById('mainSidenav').style.width = '15vw';
        document.getElementById('main').style.marginLeft = '15vw';
      }
    }
  }
  @HostListener('window:resize', ['event'])
  onResize(event) {
    if (isPlatformBrowser(this.platformId)) {
      this.w = window.innerWidth;
      this.h = window.innerHeight;
    }
  }
  openNav() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.h < 830 && this.w < 450) {
        document.getElementById('mainSidenav').style.width = '45vw';
      } else if (this.h > 450) {
        document.getElementById('mainSidenav').style.width = '15vw';
        document.getElementById('main').style.marginLeft = '15vw';
      }
    }
  }
  closeNav() {
    if (isPlatformBrowser(this.platformId)) {
      document.getElementById('mainSidenav').style.width = '0';
      document.getElementById('main').style.marginLeft = '0';
    }
  }
}
