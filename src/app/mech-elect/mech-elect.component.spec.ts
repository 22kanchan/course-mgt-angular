import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechElectComponent } from './mech-elect.component';

describe('MechElectComponent', () => {
  let component: MechElectComponent;
  let fixture: ComponentFixture<MechElectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechElectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MechElectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
