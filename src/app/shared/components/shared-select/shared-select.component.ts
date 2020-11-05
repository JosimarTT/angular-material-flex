import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface SimpleOption {
  id: string;
  name: string;
}

@Component({
  selector: 'app-shared-select',
  templateUrl: './shared-select.component.html',
  styleUrls: ['./shared-select.component.scss']
})
export class SharedSelectComponent implements OnInit {


  private _required: boolean;
  private _notEmpy: boolean;

  @Input()
  get required() { return this._required; }
  set required(value: any) { this._required = coerceBooleanProperty(value); }

  @Input()
  get notEmpy() { return this._notEmpy; }
  set notEmpy(value: any) { this._notEmpy = coerceBooleanProperty(value); }


  @Output() selectChanged: EventEmitter<any> = new EventEmitter();

  /**
   * Emits a message containing this component FormGroup.
   * The parent component can simply add the form group as a child.
   */
  @Output() onComponentReady: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  public componentFormGroup: FormGroup;
  /**
   * List of options to use for mat-option
   */
  @Input() options: SimpleOption[];

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    console.log(`ngOnInit():
      required=${this._required}, checkEmpty=${this._notEmpy},
      options=${this.options}`);
    // construct validators list based on component input properties
    const validators = [];
    if (this.required) {
      validators.push(Validators.required)
    }
    this.componentFormGroup = this.fb.group({
      select: ['', validators]
    });
    this.componentFormGroup.controls.select.valueChanges.subscribe(
      value => this.selectChanged.emit(value)
    );
    this.onComponentReady.emit(this.componentFormGroup);
  }

}