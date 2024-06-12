import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeAfterComponent } from './before-after.component';

describe('BeforeAfterComponent', () => {
  let component: BeforeAfterComponent;
  let fixture: ComponentFixture<BeforeAfterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeforeAfterComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BeforeAfterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

fdescribe('A single describe', function () {

  beforeAll(function () {
    console.log('in beforeAll');
  });
  beforeEach(function () {
    console.log('in beforeEach');
  });

  afterAll(function (done) {
    console.log('in afterAll');
    done();
  });

  afterEach(function (done) {
    console.log('in afterEach');
    done();
  });

  it('spec A', function () {
    console.log('in spec A');
    expect(true).toBe(true);
  });

  it('spec B', function () {
    console.log('in spec B');
    expect(true).toBe(true);
  });

});
