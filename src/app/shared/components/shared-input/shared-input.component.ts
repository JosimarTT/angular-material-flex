import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-input',
  templateUrl: './shared-input.component.html',
  styleUrls: ['./shared-input.component.scss']
})
export class SharedInputComponent implements OnInit {

  // @Input() type = 'text';
  // @Input() isRequired: boolean = false;
  // @Input() pattern: string = null;
  // @Input() label: string = null;
  // @Input() placeholder: string;
  // @Input() errorMsg: string;
  @Input() icon: string;

  constructor() { }

  ngOnInit(): void {
  }

}
