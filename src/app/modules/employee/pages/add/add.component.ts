import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeRequestV1 } from 'src/app/data/schemas/request/employee-request-v1';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  employeeReq: EmployeeRequestV1 = new EmployeeRequestV1();
  employeeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.employeeForm = formBuilder.group({});
  }

  ngOnInit(): void {
  }

  public addChild(childName: string, childGroup: FormGroup) {
    this.employeeForm.addControl(childName, childGroup);
  }

  insert() {
    console.log(this.employeeForm.valid)
    if (this.employeeForm.valid) {
      console.log(this.employeeReq)
    }
  }

  setFormValue(controlName: string, partialFormGroup: FormGroup) {
    console.log(partialFormGroup.get(controlName).value);
  }

}
