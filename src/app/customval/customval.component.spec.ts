import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomvalComponent } from './customval.component';

describe('CustomvalComponent', () => {
  let component: CustomvalComponent;
  let fixture: ComponentFixture<CustomvalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomvalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
