import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LifeCounterDialogComponent } from './life-counter-dialog/life-counter-dialog.component';

@Component({
  selector: 'app-life-counter',
  templateUrl: './life-counter.component.html',
  styleUrls: ['./life-counter.component.scss'],
})
export class LifeCounterComponent implements OnInit {
  playerNumber = 0;
  startingLifeTotal = 0;
  commander = false;
  poison = false;
  dialogOpened = false;

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.openSettings();
  }

  openSettings() {
    this.dialogOpened = true;
    this.matDialog
      .open(LifeCounterDialogComponent, {
        hasBackdrop: false,
        data: {
          playerNumber: this.playerNumber ? this.playerNumber : 0,
          startingLifeTotal: this.startingLifeTotal
            ? this.startingLifeTotal
            : 0,
          poison: this.poison ? this.poison : false,
          commander: this.commander ? this.commander : false,
        },
      })
      .afterClosed()
      .subscribe((result) => {
        this.playerNumber = result.playerNumber;
        this.startingLifeTotal = result.startingLifeTotal;
        this.commander = result.commander;
        this.poison = result.poison;
        this.dialogOpened = false;
      });
  }
}
