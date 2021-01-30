import { Component, OnInit } from '@angular/core';
import { FakeparticipantService } from '../fakeparticipant.service';
import { Participant } from '../participants';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-listparticipants',
  templateUrl: './listparticipants.component.html',
  styleUrls: ['./listparticipants.component.css']
})
export class ListparticipantsComponent implements OnInit {

 participants : Participant[];
  constructor(private fakeparticipantService: FakeparticipantService)
   {
       this.participants=fakeparticipantService.listparticiapnt();
   } 
   
imports:[FormsModule]

  ngOnInit(): void {
  }
  supprimerparticipant(participant:Participant)
  {

    //console.log(formateur);
    this.fakeparticipantService.supprimerparticipant(participant);
    
  }
  reloadPage()
 {
   this.fakeparticipantService.reloadPage(); 
 }

}
