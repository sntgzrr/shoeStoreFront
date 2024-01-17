import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInformationComponent } from './show-information.component';

describe('ShowInformationComponent', () => {
  let component: ShowInformationComponent;
  let fixture: ComponentFixture<ShowInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowInformationComponent]
    });
    fixture = TestBed.createComponent(ShowInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
