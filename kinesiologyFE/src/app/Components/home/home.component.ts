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
  }

}
