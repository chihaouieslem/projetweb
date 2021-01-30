import { Component, Input, OnInit, Output } from '@angular/core';
import { Participant } from '../participants';
import { FakeparticipantService } from '../fakeparticipant.service';

import { FakeformateurService } from '../formateurs/fakeformateur.service';
@Component({
  selector: 'app-ajouterp',
  templateUrl: './ajouterp.component.html',
  styleUrls: ['./ajouterp.component.css']
})
export class AjouterpComponent implements OnInit {
@Input()
  newparticipant =new Participant();
 



  addparticipant()
  {
    // console.log(this.newformateur)
    this.fakeparticipantService.ajouterparticipant(this.newparticipant);
  
 
  }

  constructor(private fakeparticipantService: FakeparticipantService) { }

  ngOnInit(): void {
  }

}
