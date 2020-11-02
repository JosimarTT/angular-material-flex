import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
}
