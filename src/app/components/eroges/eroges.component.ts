import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-eroges',
  templateUrl: './eroges.component.html',
  styleUrls: ['./eroges.component.scss']
})
export class ErogesComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    if(window.location.pathname==="/sukebe-games/eroges" || window.location.pathname==="/eroges" )
    {
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = 'url(./assets/background_ero.JPG)';
    }

}


  titulo:string[]=["otome","Eroge prueba de longitud de titulos"]
  contenido:string[]=["habia una vez","kya onii-chan, mira onii-chan dejame que te sea sincero, esto no es nada mas que una prueba para ver como funcionan los textos largos nyanyan motherfucker aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"]


}
