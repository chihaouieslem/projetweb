import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterpComponent } from './ajouterp.component';

describe('AjouterpComponent', () => {
  let component: AjouterpComponent;
  let fixture: ComponentFixture<AjouterpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
