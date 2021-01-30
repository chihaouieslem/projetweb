import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterfComponent } from './ajouterf.component';

describe('AjouterfComponent', () => {
  let component: AjouterfComponent;
  let fixture: ComponentFixture<AjouterfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
