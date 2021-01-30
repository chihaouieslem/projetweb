import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { Participant } from './participants';

@Injectable({
  providedIn: 'root'
})
export class FakeparticipantService {
  
 participants : Participant [];
 participant :Participant;
 nbparticipant:number;
  constructor() {

    this.participants = [

      { id:1,
        nomprenom :'Ahmed Chihaoui',
        email: 'chiha123@gmail.com',
        adresse:'Tunis ',
        poste:'Etudiant'
      
      },
      { id:2,
        nomprenom : 'Eslem Chihaoui',
        email: 'chihaoui@gmail.com',
        adresse:'Tunis',
        poste:'Directeur '
     
      }
      
      
      ];
   }
   listparticiapnt():Participant[]
{
  return this.participants;
}

ajouterparticipant(participant :Participant)
{
  this.participants.push(participant);
  this.trierparticipants();
  this.nbparticipant=this.participant.id +1;

}
supprimerparticipant(participant : Participant)
{
  const index = this.participants.indexOf(participant,0)
  if(index > -1 )
  this.participants.splice(index,1);
  this.nbparticipant=this.participant.id - 1;
} 
updateparticipant(p: Participant)
{
  this.supprimerparticipant(p);
  this.ajouterparticipant(p);
  
}
consulterParticipant(id):Participant
{
  this.participant= this.participants.find(p => p.id == id);
  return this.participant;
}

reloadPage() 
{
  window.location.reload();
}
trierparticipants()
{
    this.participants = this.participants.sort((n1,n2) => {
        if(n1.id > n2.id){
            return 1;

        }
        if (n1.id < n2.id){
            return -1;
        }
        return 0;

    });
  }

}
