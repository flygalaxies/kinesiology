/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KinisiologistsComponent } from './kinisiologists.component';

describe('KinisiologistsComponent', () => {
  let component: KinisiologistsComponent;
  let fixture: ComponentFixture<KinisiologistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KinisiologistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KinisiologistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
