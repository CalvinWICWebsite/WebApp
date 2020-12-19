import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipCardComponent } from './leadership-card.component';

describe('LeadershipCardComponent', () => {
  let component: LeadershipCardComponent;
  let fixture: ComponentFixture<LeadershipCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadershipCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershipCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
