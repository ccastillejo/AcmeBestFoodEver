import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgerenteComponent } from './agerente.component';

describe('AgerenteComponent', () => {
  let component: AgerenteComponent;
  let fixture: ComponentFixture<AgerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgerenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
