import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: string[] = ['Java', 'Angular'];

  constructor(private cursosService: CursosService) {
    this.nomePortal = 'http://google.com'
    /*for(let i=0; i<this.cursos.length; i++){
      let cursos = this.cursos[i];
    }
    */
    //var servico = new CursosService();

    this.cursos = this.cursosService.getCursos();

   }

  ngOnInit(): void {
  }

}
