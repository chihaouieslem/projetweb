import { Component, OnInit } from '@angular/core';
import { FakesessionitemService } from '../admin/fakesessionitem.service';
import { FakeparticipantService } from '../fakeparticipant.service';
import { FakeformateurService } from '../formateurs/fakeformateur.service';
import { Formateur } from '../formateurs/formateurs';
import { Participant } from '../participants';

@Component({
  selector: 'app-dashboared',
  templateUrl: './dashboared.component.html',
  styleUrls: ['./dashboared.component.css']
})
export class DashboaredComponent implements OnInit {
  sessionItems;
  formateurs : Formateur[];
  participants : Participant[];
  constructor(private sessionItemService: FakesessionitemService,private fakeformateurService: FakeformateurService,
    private fakeparticipantService: FakeparticipantService)
   { }
   tab = [{ session: "Angular", nbr: 0 }, { session: "NodeJS", nbr: 0 }, { session: "Symphony", nbr: 0 }, 
   { session: "Ionic", nbr: 0 }, { session: "Laravel", nbr: 0 },
   { session: "Android", nbr: 0 }, { session: "Xamarin", nbr: 0 }, { session: "Swift", nbr: 0 }];
  ngOnInit(): void {
    this.sessionItems= this.sessionItemService.get();
    this.formateurs=this.fakeformateurService.listformateurs();
    this.participants=this.fakeparticipantService.listparticiapnt();
    for (let i = 0; i < this.sessionItems.length; i++) {

      for (let j = 0; j < this.tab.length; j++) {
        {
          if (this.tab[j].session === this.sessionItems[i].track) {
          
            this.tab[j].nbr =this.tab[j].nbr+ 1;
          }
        }
      }
    }
  }
 

}
