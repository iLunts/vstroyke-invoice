import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: FbButtonComponent;
  let fixture: ComponentFixture<FbButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
