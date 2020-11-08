import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './pages/details/details.component';
import { ListComponent } from './pages/list/list.component';
import { EmployeeRoutingModule } from './employee.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddComponent } from './pages/add/add.component';



@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule
  ]
})
export class EmployeeModule { }
