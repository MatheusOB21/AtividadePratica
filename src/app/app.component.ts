import { Component } from '@angular/core';
import { alunos } from './arquivo'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atividadePratica';
  lista_alunos = alunos
}
