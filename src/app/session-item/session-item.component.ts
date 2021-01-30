import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {

alignement = "right";
couleur = "red";
@Input() session: any;
@Output() participantsChange = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
inscrire()
{
 
  this.session.name = "Formation Web Avancé";
  
  console.log('Nouvelle Inscription');
  
  this.session.participants = +this.session.participants + 1;
  //4-Afficher le nombre de participants sur le console
  console.log(this.session.participants+' Paricipants');
  //Envoyer le NBP au composant parentt
  this.participantsChange.emit(
  {
    value: 20 - this.session.participants
  });

  if (this.session.participants >=20)
  {
    this.session.isCompleted= true;
  } 

}

}
