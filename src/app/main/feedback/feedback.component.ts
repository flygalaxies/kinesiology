import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle('Feddback- What can we impove');
    meta.addTags([
      { name: 'author', content: 'kinesiologyPractice.co.za' },
      { name: 'keywords', content: 'Kinesiology Practice, feedback' },
      { name: 'description', content: 'We would Like your opinion on our website and what We can improve!' }
    ])
  }
  ngOnInit() {
  }

}
