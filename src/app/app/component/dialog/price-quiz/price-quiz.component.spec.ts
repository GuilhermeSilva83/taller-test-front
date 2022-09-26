import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceQuizComponent } from './price-quiz.component';

describe('PriceQuizComponent', () => {
  let component: PriceQuizComponent;
  let fixture: ComponentFixture<PriceQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
