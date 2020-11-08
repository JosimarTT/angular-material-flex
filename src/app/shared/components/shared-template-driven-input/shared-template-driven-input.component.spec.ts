import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedTemplateDrivenInputComponent } from './shared-template-driven-input.component';

describe('SharedTemplateDrivenInputComponent', () => {
  let component: SharedTemplateDrivenInputComponent;
  let fixture: ComponentFixture<SharedTemplateDrivenInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedTemplateDrivenInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedTemplateDrivenInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
