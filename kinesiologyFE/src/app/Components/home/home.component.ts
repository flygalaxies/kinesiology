import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _meta: Meta, private _title: Title) {
    _title.setTitle('Kinesiology Practice- Book Your Session Today!');
    _meta.addTags([
      { name: 'author', content: 'kinesiologyPractice.co.za' },
      { name: 'keywords', content: 'Kinesiology Practice, Kinesiology booking, Kinesiology,muscle testing, Kinesiology workshops, Healthy Food, Energy, Spiritual' },
      { name: 'description', content: 'Kinesiology Practice offers a platform of kinesiologists, healthy food and workshops to attend to.' }
    ])
  }

  ngOnInit() {
    this.canvas();
  }
  canvas() {
    let canvas = document.querySelector('canvas');    
    canvas.width = (100 / 100 * innerWidth);
    canvas.height = (50 / 100 * innerHeight);
    //canvas.style.backgroundColor = "red";

    let c = canvas.getContext('2d');

    //block    
    c.fillStyle = 'red';
    c.fillRect(500, 100, 600, 200);
  }

}
