import { Component, OnInit } from '@angular/core';
import { EmployeeRequestV1 } from 'src/app/data/schemas/request/employee-request-v1';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  employeeReq: EmployeeRequestV1 = new EmployeeRequestV1();

  constructor() { }

  ngOnInit(): void {
  }
  setValue(value: string, req: any) {
    console.log(req);
    console.log(value);
    this.employeeReq.firstName = value;
    console.log(this.employeeReq)
  }

  getByFilters() {
    console.log(this.employeeReq);
  }

}
