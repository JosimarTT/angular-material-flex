import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shared-template-driven-input',
  templateUrl: './shared-template-driven-input.component.html',
  styleUrls: ['./shared-template-driven-input.component.scss']
})
export class SharedTemplateDrivenInputComponent implements OnInit {

  @Input() icon: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() appearance: string;

  @Output() newValue = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  getValue(value: string) {
    this.newValue.emit(value);
  }

}
