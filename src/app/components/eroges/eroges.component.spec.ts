import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErogesComponent } from './eroges.component';

describe('ErogesComponent', () => {
  let component: ErogesComponent;
  let fixture: ComponentFixture<ErogesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErogesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErogesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
