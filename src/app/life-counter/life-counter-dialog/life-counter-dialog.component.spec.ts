import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCounterDialogComponent } from './life-counter-dialog.component';

describe('LifeCounterDialogComponent', () => {
  let component: LifeCounterDialogComponent;
  let fixture: ComponentFixture<LifeCounterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCounterDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCounterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
