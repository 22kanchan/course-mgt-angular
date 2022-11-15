import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MgtComponent } from './mgt.component';

describe('MgtComponent', () => {
  let component: MgtComponent;
  let fixture: ComponentFixture<MgtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MgtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
