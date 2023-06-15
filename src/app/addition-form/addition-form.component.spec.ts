import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionFormComponent } from './addition-form.component';

describe('AdditionFormComponent', () => {
  let component: AdditionFormComponent;
  let fixture: ComponentFixture<AdditionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdditionFormComponent]
    });
    fixture = TestBed.createComponent(AdditionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
