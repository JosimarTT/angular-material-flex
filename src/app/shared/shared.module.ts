import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedReactiveInputComponent } from './components/shared-reactive-input/shared-reactive-input.component';
import { SharedReactiveSelectComponent } from './components/shared-reactive-select/shared-reactive-select.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';



@NgModule({
  declarations: [
    SharedReactiveInputComponent,
    SharedReactiveSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    MaterialModule,
    FlexLayoutModule,
    NgxMaterialTimepickerModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    MaterialModule,
    FlexLayoutModule,
    NgxMaterialTimepickerModule,

    SharedReactiveInputComponent,
    SharedReactiveSelectComponent
  ]
})
export class SharedModule { }
