import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisqComponent } from './disq.component';

describe('DisqComponent', () => {
  let component: DisqComponent;
  let fixture: ComponentFixture<DisqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
