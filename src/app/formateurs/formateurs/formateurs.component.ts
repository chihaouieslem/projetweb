import { Component, OnInit } from '@angular/core';
import { FakeformateurService } from '../fakeformateur.service';
import { Formateur } from '../formateurs';

@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.css']
})
export class FormateursComponent implements OnInit {
  
  
 formateurs:Formateur[];
  constructor(private fakeformateurService: FakeformateurService ) 

  {
    this.formateurs = fakeformateurService.listformateurs();
  }

  ngOnInit(): void {
  }

}
