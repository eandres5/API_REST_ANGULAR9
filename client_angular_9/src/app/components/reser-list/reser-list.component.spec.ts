import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserListComponent } from './reser-list.component';

describe('ReserListComponent', () => {
  let component: ReserListComponent;
  let fixture: ComponentFixture<ReserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
