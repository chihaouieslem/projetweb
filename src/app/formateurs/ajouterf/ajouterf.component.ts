import { Component, Input, OnInit } from '@angular/core';
import { FakeformateurService } from '../fakeformateur.service';
import { Formateur } from '../formateurs';

@Component({
  selector: 'app-ajouterf',
  templateUrl: './ajouterf.component.html',
  styleUrls: ['./ajouterf.component.css']
})
export class AjouterfComponent implements OnInit {
 
  newformateur =new Formateur();

  

  addformateur()
  {
    // console.log(this.newformateur)
    this.fakeformateurService.ajouterformateur(this.newformateur);
  
  }

  constructor(private fakeformateurService: FakeformateurService ) {
 
  
   }

  ngOnInit(): void {
  }

}
