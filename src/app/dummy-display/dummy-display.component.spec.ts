import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyDisplayComponent } from './dummy-display.component';

describe('DummyDisplayComponent', () => {
  let component: DummyDisplayComponent;
  let fixture: ComponentFixture<DummyDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DummyDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
