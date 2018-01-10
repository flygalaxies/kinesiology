import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-melina',
  templateUrl: './melina.component.html',
  styleUrls: ['./melina.component.scss']
})
export class MelinaComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle('Milena Geertsema- Book a session with Milena Geertsema');
    meta.addTags([
      { name: 'author', content: 'kinesiologyPractice.co.za' },
      { name: 'keywords', content: 'Kinesiology Practice, Kinesiology booking, Kinesiology' },
      { name: 'description', content: 'Details and information on The Kinesiologist: Milena Geertsema. You can contact her to book a session, find out more information on Kinesiology or the Types of sessions she can do' }
    ])
  }

  ngOnInit() {
  }

}
