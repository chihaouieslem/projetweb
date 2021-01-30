import { Injectable } from '@angular/core';
import { Formateur } from './formateurs';

@Injectable({
  providedIn: 'root'
})
export class FakeformateurService {
  formateurs : Formateur [];
  formateur :Formateur;
  constructor()  
  { 
    this.formateurs = [

{ id:100,
  nomprenom : 'Eslem Chihaoui',
  email: 'chihaoui@gmail.com',
  adresse:'Tunis',
   domaine:'Angular'
},

{
  id:101,
  nomprenom : 'Fatma Chaaben',
  email: 'fatmach@gmail.com',
  adresse:'Tunis',
  domaine:'NodeJs'
}
];
}
listformateurs():Formateur[]
{
  return this.formateurs;
}

ajouterformateur(formateur :Formateur)
{
  this.formateurs.push(formateur);
}
supprimerformateur(formateur : Formateur)
{
  const index = this.formateurs.indexOf(formateur,0)
  if(index > -1 )
  this.formateurs.splice(index,1);
} 
updateformateur(f: Formateur)
{
  this.supprimerformateur(f);
  this.ajouterformateur(f);
  this.trierformateurs();
}
consulterformateur(id):Formateur
{
  this.formateur = this.formateurs.find(f => f.id == id);
  return this.formateur;
}
trierformateurs()
{
    this.formateurs = this.formateurs.sort((n1,n2) => {
        if(n1.id > n2.id){
            return 1;

        }
        if (n1.id < n2.id){
            return -1;
        }
        return 0;

    });
}
reloadPage() 
{
  window.location.reload();
}
}