import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertenciaComponent } from './advertencia.component';

describe('AdvertenciaComponent', () => {
  let component: AdvertenciaComponent;
  let fixture: ComponentFixture<AdvertenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
