import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListparticipantsComponent } from './listparticipants.component';

describe('ListparticipantsComponent', () => {
  let component: ListparticipantsComponent;
  let fixture: ComponentFixture<ListparticipantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListparticipantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListparticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
