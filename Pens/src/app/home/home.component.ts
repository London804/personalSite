import { Component, OnInit } from '@angular/core';
import { NavComponent} from '../nav/Nav.component';
import { FooterComponent} from '../footer/Footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
