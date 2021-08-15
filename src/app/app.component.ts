import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  title = 'MTG-Affinity';

  constructor(private breakpointOberserver: BreakpointObserver) { }

  ngAfterViewInit(): void {
    this.breakpointOberserver.observe(['(max-width: 599.98px)']).subscribe(result => {
      if (result.matches) {
        this.sidenav.mode = "over";
        this.sidenav.close();
      }
      else {
        this.sidenav.mode = "side";
        this.sidenav.open();
      }
    })
  }

}
