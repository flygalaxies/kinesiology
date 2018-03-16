import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //@Input() particles: Particle[];

  constructor(private _meta: Meta, private _title: Title) {
    _title.setTitle('Kinesiology Practice- Book Your Session Today!');
    _meta.addTags([
      { name: 'author', content: 'kinesiologyPractice.co.za' },
      { name: 'keywords', content: 'Kinesiology Practice, Kinesiology booking, Kinesiology,muscle testing, Kinesiology workshops, Healthy Food, Energy, Spiritual' },
      { name: 'description', content: 'Kinesiology Practice offers a platform of kinesiologists, healthy food and workshops to attend to.' }
    ])
  }

  @ViewChild('mainCanvas') canvasRef: ElementRef

  ngOnInit() {
  //   let ctx: CanvasRenderingContext2D = this.canvasRef.nativeElement.getContext('2d');
  //   // Clear any previous content.
  //   ctx.clearRect(0, 0, 500, 500);
  //   // Draw the clip path that will mask everything else
  //   // that we'll draw later.    
  //   ctx.beginPath();
  //   ctx.moveTo(250, 60);
  //   ctx.lineTo(63.8, 126.4);
  //   ctx.lineTo(92.2, 372.6);
  //   ctx.lineTo(250, 460);
  //   ctx.lineTo(407.8, 372.6);
  //   ctx.lineTo(436.2, 126.4);
  //   ctx.moveTo(250, 104.2);
  //   ctx.lineTo(133.6, 365.2);
  //   ctx.lineTo(177, 365.2);
  //   ctx.lineTo(200.4, 306.8);
  //   ctx.lineTo(299.2, 306.8);
  //   ctx.lineTo(325.2, 365.2);
  //   ctx.lineTo(362.6, 365.2);
  //   ctx.lineTo(250, 104.2);
  //   ctx.moveTo(304, 270.8);
  //   ctx.lineTo(216, 270.8);
  //   ctx.lineTo(250, 189);
  //   ctx.lineTo(284, 270.8);
  //   ctx.clip('evenodd');

  //   // Draw 50,000 circles at random points
  //   ctx.beginPath();
  //   ctx.fillStyle = '#DD0031';
  //   for (let i = 0; i < 50000; i++) {
  //     let x = Math.random() * 500;
  //     let y = Math.random() * 500;
  //     ctx.moveTo(x, y);
  //     ctx.arc(x, y, 1, 0, Math.PI * 2);
  //   }
  //   ctx.fill();
  }
}
