import { Component, OnInit } from '@angular/core';
import { UserResponseV1 } from 'src/app/data/schemas/response/user-response-v1';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user: UserResponseV1 = new UserResponseV1();
  fullName: string;
  schedule: string = '08:00 - 14:00';
  officeHours: string = '06:00';
  startOfficeHours: string = '08:00';
  officeHoursNewValue: string = '06:00';
  validationSpan: string = '01:30';


  constructor() { }

  ngOnInit(): void {
    this.user.firstName = 'Josimar';
    this.user.secondName = 'Javier';
    this.user.firstLastName = 'Tantahuilca';
    this.user.secondLastName = 'Torres';
    this.user.userCode = '1234';

    this.fullName = this.user.firstLastName + ' ' + this.user.secondName + ' ' + this.user.firstLastName + ' ' + this.user.secondLastName;
  }

  edit() {
    console.log(this.startOfficeHours);
    console.log(this.officeHoursNewValue);
    console.log(this.validationSpan);
  }

}
