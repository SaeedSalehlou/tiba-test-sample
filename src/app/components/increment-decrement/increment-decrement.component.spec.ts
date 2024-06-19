import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementDecrementComponent } from './increment-decrement.component';

describe('IncrementDecrementComponent', () => {
  let component: IncrementDecrementComponent;
  let fixture: ComponentFixture<IncrementDecrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncrementDecrementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncrementDecrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
