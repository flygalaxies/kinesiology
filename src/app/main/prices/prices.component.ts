import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle('Kinesiology Session Rates- The time and cost of each type of session');
    meta.addTags([
      { name: 'author', content: 'kinesiologyPractice.co.za' },
      { name: 'keywords', content: 'Kinesiology Practice, Kinesiology rates, Kinesiology Prices' },
      { name: 'description', content: 'The rates of each session are available here, ' }
    ])
  }

  ngOnInit() {
  }

}
