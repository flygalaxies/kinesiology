import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle('Different Session Types- What are the different types of session you can choose from');
    meta.addTags([
      { name: 'author', content: 'kinesiologyPractice.co.za' },
      { name: 'keywords', content: 'Kinesiology Practice, Kinesiology Sessions, Kinesiology' },
      { name: 'description', content: 'All the different sessions that the kinisiologist can have with you.' }
    ])
  }

  ngOnInit() {
  }

}
