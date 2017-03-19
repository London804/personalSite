import { Component, OnInit,  NgModule, CUSTOM_ELEMENTS_SCHEMA, HostListener, Input, ViewChild } from '@angular/core';


@Component({
  selector: 'app-play-bar',
  templateUrl: './play-bar.component.html',
  styleUrls: ['./play-bar.component.scss']
})

export class PlayBarComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  // ViewChild(FixedDirective) directive = null

  // ngAfterContentInit() {
  //   // How can i call functionFromDirective()?
  //   this.directive.onResize()
  // }


}
