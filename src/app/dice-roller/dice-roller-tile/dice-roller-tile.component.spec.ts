import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceRollerTileComponent } from './dice-roller-tile.component';

describe('DiceRollerTileComponent', () => {
  let component: DiceRollerTileComponent;
  let fixture: ComponentFixture<DiceRollerTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiceRollerTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceRollerTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
