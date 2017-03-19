import { Component, OnInit,  NgModule, CUSTOM_ELEMENTS_SCHEMA, HostListener, Input } from '@angular/core';


@Component({
  selector: 'app-play-bar',
  templateUrl: './play-bar.component.html',
  styleUrls: ['./play-bar.component.scss']
})

export class PlayBarComponent implements OnInit {

  constructor() {
  }

  @HostListener('window:resize', ['$event'])

   onResize(event) {
     event.target.innerWidth;

     if(event.target.innerWidth < '748px') {
    // this.left = 800 - $(document).scrollLeft()
    // this.style.left = 800 - document.scrollLeft
      console.log('you got small');
    }
  }

  ngOnInit() {
    this.onResize(event);
      // window.innerWidth;
      // console.log(window.innerWidth);

      // if(window.innerWidth > '748px') {
      //   // this.left = 800 - $(document).scrollLeft()
      //   // this.style.left = 800 - document.scrollLeft
      // }
  }
}
