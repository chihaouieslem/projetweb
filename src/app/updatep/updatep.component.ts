import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FakeparticipantService } from '../fakeparticipant.service';
import { Participant } from '../participants';

@Component({
  selector: 'app-updatep',
  templateUrl: './updatep.component.html',
  styleUrls: ['./updatep.component.css']
})
export class UpdatepComponent implements OnInit {
 currentparticipant =new Participant();
  constructor(
    private activatedRoute: ActivatedRoute,
    private router :Router,
    private fakeparticipantService:FakeparticipantService
  ) { }


updateparticipant1()
{return this.fakeparticipantService.updateparticipant(this.currentparticipant);}


  ngOnInit(): void 
  {
    this.currentparticipant = this.fakeparticipantService.consulterParticipant(this.activatedRoute.snapshot.params.id);
  }

}
