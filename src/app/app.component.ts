import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IntroduccionComponent } from './introduccion/introduccion.component';
import { DirectorComponent } from './director/director.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { MisionComponent } from './mision/mision.component';
import { AprendeEnlineaComponent } from './aprende-enlinea/aprende-enlinea.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, IntroduccionComponent, DirectorComponent, OfertasComponent, MisionComponent, AprendeEnlineaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mejora-trabajo-colegio';
}
