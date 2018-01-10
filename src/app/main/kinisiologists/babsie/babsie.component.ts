import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-babsie',
  templateUrl: './babsie.component.html',
  styleUrls: ['./babsie.component.scss']
})
export class BabsieComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle('Babsie Nothnagel- Book a session with Babsie Nothnagel');
    meta.addTags([
      { name: 'author', content: 'kinesiologyPractice.co.za' },
      { name: 'keywords', content: 'Kinesiology Practice, Kinesiology booking, Kinesiology' },
      { name: 'description', content: 'Details and information on The Kinesiologist: Babsie Nothnagel. You can contact her to book a session, find out more information on Kinesiology or the Types of sessions she can do' }
    ])
  }

  ngOnInit() {
  }
}
