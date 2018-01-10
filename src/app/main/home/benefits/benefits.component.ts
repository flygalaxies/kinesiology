import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle('benefits Of Kinesiology- How Does Kinesiology Help you!');
    meta.addTags([
      { name: 'author', content: 'kinesiologyPractice.co.za' },
      { name: 'keywords', content: 'Kinesiology Practice, Benefits Of Kinesiology, Kinesiology, How Does Kinesiology Help' },
      { name: 'description', content: 'A small List of benefits that Kinesology has, how it may effect yourt body' }
    ])
  }

  ngOnInit() {
  }

}
