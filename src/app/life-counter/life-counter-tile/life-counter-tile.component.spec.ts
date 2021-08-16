import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCounterTileComponent } from './life-counter-tile.component';

describe('LifeCounterTileComponent', () => {
  let component: LifeCounterTileComponent;
  let fixture: ComponentFixture<LifeCounterTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCounterTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCounterTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
