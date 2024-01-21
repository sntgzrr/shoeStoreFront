import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustainableComponent } from './sustainable.component';

describe('SustainableComponent', () => {
  let component: SustainableComponent;
  let fixture: ComponentFixture<SustainableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SustainableComponent]
    });
    fixture = TestBed.createComponent(SustainableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
