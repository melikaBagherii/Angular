import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckfieldComponent } from './checkfield.component';

describe('CheckfieldComponent', () => {
  let component: CheckfieldComponent;
  let fixture: ComponentFixture<CheckfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckfieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
