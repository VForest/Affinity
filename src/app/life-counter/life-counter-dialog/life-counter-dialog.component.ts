import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-life-counter-dialog',
  templateUrl: './life-counter-dialog.component.html',
  styleUrls: ['./life-counter-dialog.component.scss'],
})
export class LifeCounterDialogComponent implements OnInit {
  lifeCounterConfiguration = new FormGroup({
    playerNumber: new FormControl('2', [
      Validators.min(1),
      Validators.max(6),
      Validators.required,
    ]),
    startingLifeTotal: new FormControl('20', [
      Validators.min(1),
      Validators.max(100),
      Validators.required,
    ]),
    poison: new FormControl(false),
    commander: new FormControl(false),
  });

  initialPlayerNumber = 0;
  initialStartingLifeTotal = 0;
  initialCommander = false;
  initialPoison = false;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private data: {
      playerNumber: number;
      startingLifeTotal: number;
      poison: boolean;
      commander: boolean;
    },
    private dialogRef: MatDialogRef<LifeCounterDialogComponent>
  ) {}

  ngOnInit(): void {
    if (this.data.playerNumber) {
      this.initialPlayerNumber = this.data.playerNumber;
      this.lifeCounterConfiguration
        .get('playerNumber')
        ?.setValue(this.initialPlayerNumber);
    }
    if (this.data.startingLifeTotal) {
      this.initialStartingLifeTotal = this.data.startingLifeTotal;
      this.lifeCounterConfiguration
        .get('startingLifeTotal')
        ?.setValue(this.initialStartingLifeTotal);
    }
    if (this.data.poison) {
      this.initialPoison = this.data.poison;
      this.lifeCounterConfiguration.get('poison')?.setValue(this.initialPoison);
    }

    if (this.data.commander) {
      this.initialCommander = this.data.commander;
      this.lifeCounterConfiguration
        .get('commander')
        ?.setValue(this.initialCommander);
    }
  }

  getErrorMessage() {
    if (
      this.lifeCounterConfiguration
        .get('startingLifeTotal')
        ?.hasError('required')
    ) {
      return 'You must enter a value';
    } else if (
      this.lifeCounterConfiguration.get('startingLifeTotal')?.value < 1
    ) {
      return 'Starting life total must be over 0';
    } else if (
      this.lifeCounterConfiguration.get('startingLifeTotal')?.value > 100
    ) {
      return 'Starting life total must be under 100';
    } else return 'Invalid';
  }

  onSubmit() {
    this.dialogRef.close(this.lifeCounterConfiguration.value);
  }

  cancel() {
    this.lifeCounterConfiguration
      .get('playerNumber')
      ?.setValue(this.initialPlayerNumber);
    this.lifeCounterConfiguration
      .get('startingLifeTotal')
      ?.setValue(this.initialStartingLifeTotal);
    this.lifeCounterConfiguration.get('poison')?.setValue(this.initialPoison);
    this.lifeCounterConfiguration
      .get('commander')
      ?.setValue(this.initialCommander);
  }
}
