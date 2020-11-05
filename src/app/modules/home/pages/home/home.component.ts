import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SimpleOption } from 'src/app/shared/components/shared-select/shared-select.component';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  options: SimpleOption[] = [
    { id: '0', name: 'All' },
    { id: '7', name: 'Option1' },
    { id: '10', name: 'Option2' },
    { id: '16', name: 'Option3' }
  ];

  subcategory: { id: string, name: string, categoryId: string }[] = [
    { id: '10', name: 'Option10', categoryId: '7' },
    { id: '20', name: 'Option20', categoryId: '7' },
    { id: '30', name: 'Option30', categoryId: '10' },
    { id: '40', name: 'Option40', categoryId: '10' },
    { id: '50', name: 'Option50', categoryId: '16' },
    { id: '60', name: 'Option60', categoryId: '16' }
  ];

  subcategory2: SimpleOption[] = [];

  public simpleForm: FormGroup;

  public selectedOption: any;

  constructor(private fb: FormBuilder) {
    this.simpleForm = fb.group({
      name: ['']
    });
  }

  ngOnInit(): void {
  }

  public addChild(childName: string, childGroup: FormGroup) {
    this.simpleForm.addControl(childName, childGroup);
  }

  public showOption(value: string) {
    console.log(this.simpleForm)
    this.subcategory2 = this.subcategory.filter(x => x.categoryId == value);
    this.subcategory2.unshift({ id: '0', name: 'All' });
    this.simpleForm.patchValue({ selectGroup2: '' });
    this.selectedOption = value;
  }

}
