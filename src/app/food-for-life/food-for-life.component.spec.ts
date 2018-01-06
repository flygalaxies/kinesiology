import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodForLifeComponent } from './food-for-life.component';

describe('FoodForLifeComponent', () => {
  let component: FoodForLifeComponent;
  let fixture: ComponentFixture<FoodForLifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodForLifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodForLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
