import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

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

  constructor(private dialogRef: MatDialogRef<LifeCounterDialogComponent>) {}

  ngOnInit(): void {}

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
    this.dialogRef.close(this.lifeCounterConfiguration.value)
  }
}
