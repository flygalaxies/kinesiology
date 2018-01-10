import { Component, OnInit, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],  
})
export class HomeComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle('Kinesiology Practice- Book Your Session Today!');
    meta.addTags([
      { name: 'author', content: 'kinesiologyPractice.co.za' },
      { name: 'keywords', content: 'Kinesiology Practice, Kinesiology booking, Kinesiology' },
      { name: 'description', content: 'Kinesiology Practice offers a platform of kinesiologists for you to choose from.' }
    ])
  }

  ngOnInit() {
  }
  // change the animation state
}