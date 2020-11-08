import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRequestV1 } from 'src/app/data/schemas/request/user-request-v1';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  userReq: UserRequestV1 = new UserRequestV1();
  employeeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.employeeForm = formBuilder.group({});
  }

  ngOnInit(): void {

    document.getElementById('nav2Title').innerHTML = 'Add Employee';
  }

  public addChild(childName: string, childGroup: FormGroup) {
    this.employeeForm.addControl(childName, childGroup);
  }

  insert() {

    this.employeeForm.markAllAsTouched();

    console.log(this.employeeForm.valid)
    console.log(this.userReq);
    if (this.employeeForm.valid) {
      this.router.navigateByUrl('/employee/list');
    }
  }

  setFormValue(controlName: string, partialFormGroup: FormGroup) {
    console.log(partialFormGroup.get(controlName).value);
  }

}
