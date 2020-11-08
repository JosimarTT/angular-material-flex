import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedTemplateDrivenSelectComponent } from './shared-template-driven-select.component';

describe('SharedTemplateDrivenSelectComponent', () => {
  let component: SharedTemplateDrivenSelectComponent;
  let fixture: ComponentFixture<SharedTemplateDrivenSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedTemplateDrivenSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedTemplateDrivenSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
