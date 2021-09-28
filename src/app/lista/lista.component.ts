import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Alunos } from '../models/Alunos';
import { SrvalunosService } from '../srvalunos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  listaal$!: Observable <Alunos[]>; //propriedade que pega os dados
  constructor(
    private AlunoService: SrvalunosService
  ) { }

  ngOnInit(): void {
    this.listaal$=this.AlunoService.alsf.valueChanges();
  }

}
