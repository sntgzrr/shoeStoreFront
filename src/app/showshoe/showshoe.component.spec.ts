import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowshoeComponent } from './showshoe.component';

describe('ShowshoeComponent', () => {
  let component: ShowshoeComponent;
  let fixture: ComponentFixture<ShowshoeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowshoeComponent]
    });
    fixture = TestBed.createComponent(ShowshoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
