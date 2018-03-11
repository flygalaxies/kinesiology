import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KinesiologyComponent } from './kinesiology.component';

describe('KinesiologyComponent', () => {
  let component: KinesiologyComponent;
  let fixture: ComponentFixture<KinesiologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KinesiologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KinesiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
