import { Component, OnInit } from '@angular/core';
import { UserRequestV1 } from 'src/app/data/schemas/request/user-request-v1';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  userReq: UserRequestV1 = new UserRequestV1();

  constructor() { }

  ngOnInit(): void {

    document.getElementById('nav2Title').innerHTML = 'Employee List';
  }
  setValue(value: string, req: any) {
    console.log(req);
    console.log(value);
    this.userReq.firstName = value;
    console.log(this.userReq)
  }

  getByFilters() {
    console.log(this.userReq);
  }

}
