import { Component, OnInit } from '@angular/core';
import { FakeformateurService } from '../fakeformateur.service';
import { Formateur } from '../formateurs';


@Component({
  selector: 'app-liste-formateurs',
  templateUrl: './liste-formateurs.component.html',
  styleUrls: ['./liste-formateurs.component.css']
})
export class ListeFormateursComponent implements OnInit {


 formateurs : Formateur[];
  constructor(private fakeformateurService: FakeformateurService)
   {
       this.formateurs=fakeformateurService.listformateurs();
   } 
   

  ngOnInit(): void {
  }
  supprimerformateur(formateur:Formateur)
  {

    this.fakeformateurService.supprimerformateur(formateur);
  }
  reloadPage()
  {
    this.fakeformateurService.reloadPage(); 
  }

}
