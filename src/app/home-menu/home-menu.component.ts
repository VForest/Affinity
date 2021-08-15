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

  constructor(private breakpointOberserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointOberserver.observe(['(max-width: 599.98px)']).subscribe(result => {
      result.matches ? this.cols = 1 : this.cols = 2;
    })
  }

}
