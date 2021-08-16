import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LifeCounterDialogComponent } from './life-counter-dialog/life-counter-dialog.component';

@Component({
  selector: 'app-life-counter',
  templateUrl: './life-counter.component.html',
  styleUrls: ['./life-counter.component.scss'],
})
export class LifeCounterComponent implements OnInit {

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.matDialog
      .open(LifeCounterDialogComponent, { hasBackdrop: false })
      .afterClosed()
      .subscribe((result) => {console.log(result)});
  }
}
