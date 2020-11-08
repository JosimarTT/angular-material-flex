import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shared-reactive-input',
  templateUrl: './shared-reactive-input.component.html',
  styleUrls: ['./shared-reactive-input.component.scss']
})
export class SharedReactiveInputComponent implements OnInit {

  private _required: boolean;
  private _minLength: number;
  componentFormGroup: FormGroup;
  @Input()
  get required() { return this._required; }
  set required(value: any) { this._required = coerceBooleanProperty(value); }

  @Input()
  get minLength() { return this._minLength; }
  set minLength(value: any) { this._minLength = Number(value); }

  @Input() icon: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() appearance: string;
  @Input() newValue: EventEmitter<string> = new EventEmitter();

  @Output() onComponentReady: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() onValueChange: EventEmitter<any> = new EventEmitter<any>();

  @Input() partialFormControlName: string;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.componentFormGroup = this.formBuilder.group({});
  }

  ngOnInit(): void {
    console.log('TODO: reactive input initialized twice on each call');
    const validators = [];
    if (this.required) validators.push(Validators.required);
    if (this.minLength > 0) validators.push(Validators.minLength(this.minLength));

    this.componentFormGroup.addControl(this.partialFormControlName, this.formBuilder.control('', validators));

    this.componentFormGroup.get(this.partialFormControlName).valueChanges.subscribe(
      value => this.onValueChange.emit(this.componentFormGroup.get(this.partialFormControlName).value)
    );

    this.onComponentReady.emit(this.componentFormGroup);
  }
}
