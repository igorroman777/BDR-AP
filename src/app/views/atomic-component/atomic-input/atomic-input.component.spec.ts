import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomicInputComponent } from './atomic-input.component';

describe('AtomicInputComponent', () => {
  let component: AtomicInputComponent;
  let fixture: ComponentFixture<AtomicInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtomicInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomicInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
