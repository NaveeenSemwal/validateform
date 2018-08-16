import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempvarComponent } from './tempvar.component';

describe('TempvarComponent', () => {
  let component: TempvarComponent;
  let fixture: ComponentFixture<TempvarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempvarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
