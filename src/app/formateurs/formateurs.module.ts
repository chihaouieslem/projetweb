import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeFormateursComponent } from './liste-formateurs/liste-formateurs.component';
import { RouterModule, Routes } from '@angular/router';
import { FormateursComponent } from './formateurs/formateurs.component';
import { FormsModule, NgForm } from '@angular/forms';
import { AjouterfComponent } from './ajouterf/ajouterf.component';
import { UpdateFormateurComponent } from './update-formateur/update-formateur.component';

const formateursRoutes: Routes = [
  {
    path: '',
    component: ListeFormateursComponent,
    children: 
    [
      { path: 'add', component: AjouterfComponent },
      { path: 'update/:ch', component:UpdateFormateurComponent},
     
     
    ]
    }
    ];
  



@NgModule({
  declarations: [ListeFormateursComponent, AjouterfComponent, UpdateFormateurComponent],
  imports: [
    RouterModule.forChild(formateursRoutes),
    CommonModule,
    FormsModule
  
  ],
 
  bootstrap: [FormateursComponent]
})
export class FormateursModule { }
