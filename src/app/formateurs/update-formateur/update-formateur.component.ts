import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakeformateurService } from '../fakeformateur.service';
import { Formateur } from '../formateurs';
import {Router} from '@angular/router';


@Component({
  selector: 'app-update-formateur',
  templateUrl: './update-formateur.component.html',
  styleUrls: ['./update-formateur.component.css']
})
export class UpdateFormateurComponent implements OnInit {
 currentformateur = new Formateur();

  constructor(
    private activatedRoute :ActivatedRoute,
    private router :Router,
    private fakeformateurService : FakeformateurService
  ) { }

  ngOnInit(): void {
    this.currentformateur =this.fakeformateurService.consulterformateur(this.activatedRoute.snapshot.params.id);
   // console.log(this.currentformateur);

  }

  updateformateur1()
  {
   return this.fakeformateurService.updateformateur(this.currentformateur);
    //this.router.navigate(['formateur']);
  }

}
