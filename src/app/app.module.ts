import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { InscriptionDisabledDirective } from './inscription-disabled.directive';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormateursComponent } from './formateurs/formateurs/formateurs.component';
import { AjouterfComponent } from './formateurs/ajouterf/ajouterf.component';
import { ListeFormateursComponent } from './formateurs/liste-formateurs/liste-formateurs.component';
import { UpdateFormateurComponent } from './formateurs/update-formateur/update-formateur.component';
import { ListparticipantsComponent } from './listparticipants/listparticipants.component';
import { AjouterpComponent } from './ajouterp/ajouterp.component';
import { FormsModule } from '@angular/forms';
import { UpdatepComponent } from './updatep/updatep.component';
import { DashboaredComponent } from './dashboared/dashboared.component';



const appRoutes: Routes = [
  {
  path: 'list',
  component: SessionItemListComponent},
  {
    path: 'listp',
    component: ListparticipantsComponent},
    {
      path: 'ajouterp',
      component: AjouterpComponent},
      {
        path: 'updatep/:id',
        component: UpdatepComponent},
        {
          path: 'dash',
          component: DashboaredComponent},
    
  

  {
  path: 'admin',
  loadChildren: './admin/admin.module#AdminModule'
  },
  {
    
   path: 'formateurs',
   loadChildren:()=>import('./formateurs/formateurs.module').then(m=> m.FormateursModule)
      
  },

  { path: '', redirectTo: 'dash', pathMatch: 'full' },
  { path:'add', component:AjouterfComponent},
  { path:'update/:id', component:UpdateFormateurComponent},
  { path: '**', component: PagenotfoundComponent },

  ];
@NgModule({
  declarations: [
    AppComponent,
    SessionItemComponent,
    SessionItemListComponent,
    InscriptionDisabledDirective,
    PagenotfoundComponent,
    ListparticipantsComponent,
    AjouterpComponent,
    UpdatepComponent,
    DashboaredComponent,
    
 
    

  ],
  imports: [
    RouterModule.forRoot(appRoutes,
    { enableTracing: true } ),
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
