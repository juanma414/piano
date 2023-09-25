import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Piano';

  aplicarSonido(nro:number):void{
    const audio= new Audio();
    audio.src='../assets/sonidos/note'+nro+'.wav';
    audio.load();
    audio.play();
  }
}
