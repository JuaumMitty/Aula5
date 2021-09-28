import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Alunos } from './models/Alunos';

@Injectable({
  providedIn: 'root'
})
export class SrvalunosService {
  alsf!: AngularFirestoreCollection<Alunos>; //busca o dados da nuvem e agrega a Nossa Model
  constructor(
    private db: AngularFirestore // Responsável pela conexão
  ) {
    this.setAlunos();
   }
  
  setAlunos(){
    this.alsf = this.db.collection<Alunos>('/alunos'); 
  }

  create(alsf: Alunos): Promise<void>{
    const codigo = this.db.createId();
    return this.alsf.doc<Alunos>(codigo).set({
      codigo,
      name: alsf.name,
      email: alsf.email
    });
  }
}
