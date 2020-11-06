import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  toppings = new FormControl();
  options = [
    { id: 1, name: "ES" },
    { id: 2, name: "EN" }
  ]
  language = "EN";

  examples = [
    { link: 'home', label: 'Home' },
    { link: 'home/testformgroup', label: 'TestForm' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  onLanguageChange(event: any) {
    this.language = this.options.find(x => x.id == event).name;
  }

}
