/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MelinaComponent } from './melina.component';

describe('MelinaComponent', () => {
  let component: MelinaComponent;
  let fixture: ComponentFixture<MelinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
