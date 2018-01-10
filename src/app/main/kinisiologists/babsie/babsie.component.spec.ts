/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BabsieComponent } from './babsie.component';

describe('BabsieComponent', () => {
  let component: BabsieComponent;
  let fixture: ComponentFixture<BabsieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabsieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabsieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
