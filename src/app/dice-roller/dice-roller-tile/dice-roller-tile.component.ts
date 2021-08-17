import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice-roller-tile',
  templateUrl: './dice-roller-tile.component.html',
  styleUrls: ['./dice-roller-tile.component.scss'],
})
export class DiceRollerTileComponent implements OnInit {
  @Input() title = '';
  @Input() faces = 0;
  result: number | string = '';
  sameResult = false;

  constructor() {}

  ngOnInit(): void {}

  roll(faces: number) {
    let oldResult = this.result;
    this.result = Math.floor(Math.random() * faces + 1);
    oldResult === this.result
      ? (this.sameResult = true)
      : (this.sameResult = false);
  }
}
