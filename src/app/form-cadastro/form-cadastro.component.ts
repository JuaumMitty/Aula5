import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alunos } from '../models/Alunos';
import { SrvalunosService } from '../srvalunos.service';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent implements OnInit {
  aluno: Alunos = {
    name: '',
    email: ''
  };

  constructor(
    private als: SrvalunosService,// semelhando a nossa classe DAO do Java
    private router: Router // para termos acesso a criação de rotas semelhamte ao RequestDispacher
  ) { }

  ngOnInit(): void {
  }

  cadastrar() {
    if (!this.aluno.name) {
      alert('Nome não foi informado');
      //return false;
  } else if (!this.aluno.email) {
    alert('E-mail não foi informado');
    //return false;
  } else {
    this.als.create(this.aluno) ;
    alert('Aluno Cadastrado com sucesso !');
    this.voltar();
  }
  }
    voltar() {
      this.router.navigate(['/lista']); // lembre se de criar a constante do tipo router
    }
}
