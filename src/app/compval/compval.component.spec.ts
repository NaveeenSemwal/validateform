import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompvalComponent } from './compval.component';

describe('CompvalComponent', () => {
  let component: CompvalComponent;
  let fixture: ComponentFixture<CompvalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompvalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
