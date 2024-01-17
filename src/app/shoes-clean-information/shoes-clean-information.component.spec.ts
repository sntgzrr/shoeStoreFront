import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesCleanInformationComponent } from './shoes-clean-information.component';

describe('ShoesCleanInformationComponent', () => {
  let component: ShoesCleanInformationComponent;
  let fixture: ComponentFixture<ShoesCleanInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoesCleanInformationComponent]
    });
    fixture = TestBed.createComponent(ShoesCleanInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
