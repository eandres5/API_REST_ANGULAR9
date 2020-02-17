import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserFormComponent } from './reser-form.component';

describe('ReserFormComponent', () => {
  let component: ReserFormComponent;
  let fixture: ComponentFixture<ReserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
