import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser'  
@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss']
})
export class JoinUsComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle('Join our Kinesiology Family');
    meta.addTags([
      { name: 'author', content: 'kinesiologyPractice.co.za' },
      { name: 'keywords', content: 'Kinesiology Practice, Join the Family' },
      { name: 'description', content: 'The information needed on how to join the Kinesiology Practice Family' }
    ])
  }

  ngOnInit() {
  }

}
