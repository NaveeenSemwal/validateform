import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValformComponent } from './valform.component';

describe('ValformComponent', () => {
  let component: ValformComponent;
  let fixture: ComponentFixture<ValformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
