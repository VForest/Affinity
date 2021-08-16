import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-counter-tile',
  templateUrl: './life-counter-tile.component.html',
  styleUrls: ['./life-counter-tile.component.scss'],
})
export class LifeCounterTileComponent implements OnInit {
  @Input() startingLifeTotal = '';
  @Input() commander = '';
  @Input() poison = '';
  @Input() playerNumber = '';
  nameDisabled = true;
  life = 0;
  poisonCounter = 0;
  commanderDamage = 0;

  constructor() {}

  ngOnInit(): void {
    this.life = Number(this.startingLifeTotal);
  }

  addLife() {
    this.life++;
  }

  addPoison() {
    this.poisonCounter++;
  }

  addCommanderDamage() {
    this.commanderDamage++;
  }

  removePoison() {
    if (this.poisonCounter > 0) this.poisonCounter--;
  }

  removeLife() {
    if (this.life > 0) this.life--;
  }

  removeCommanderDamage() {
    if (this.commanderDamage > 0) this.commanderDamage--;
  }

  reset() {
    this.life = Number(this.startingLifeTotal);
    this.poisonCounter = 0;
    this.commanderDamage = 0;
  }

  editName() {
    this.nameDisabled = !this.nameDisabled;
  }
}
