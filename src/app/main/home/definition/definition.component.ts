import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss']
})
export class DefinitionComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle('Definition Of Kinesiology- What does kinesiology mean');
    meta.addTags([
      { name: 'author', content: 'kinesiologyPractice.co.za' },
      { name: 'keywords', content: 'Kinesiology Practice, Definition Of Kinesiology, Kinesiology, Define Kinesiology' },
      { name: 'description', content: 'The Definition Of Kinesiology, What it is, and how it works.' }
    ])
  }

  ngOnInit() {
  }

}
