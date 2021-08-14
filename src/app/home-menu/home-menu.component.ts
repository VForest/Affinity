import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss']
})
export class HomeMenuComponent implements OnInit {

  cols = 3;
  screenSize: Observable<BreakpointState>

  constructor(breakpointOberserver: BreakpointObserver) {
    this.screenSize = breakpointOberserver.observe(['(max-width: 599.98px)'])
  }

  ngOnInit(): void {
    this.screenSize.subscribe(result => {
      result.matches ? this.cols = 1 : this.cols = 2;
    })
  }

}
