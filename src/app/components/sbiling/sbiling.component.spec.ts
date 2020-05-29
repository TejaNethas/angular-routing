import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbilingComponent } from './sbiling.component';

describe('SbilingComponent', () => {
  let component: SbilingComponent;
  let fixture: ComponentFixture<SbilingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbilingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
