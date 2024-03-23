import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyusernameComponent } from './myusername.component';

describe('MyusernameComponent', () => {
  let component: MyusernameComponent;
  let fixture: ComponentFixture<MyusernameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyusernameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyusernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
