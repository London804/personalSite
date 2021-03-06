import { Component, ViewEncapsulation } from '@angular/core';
import {HomeComponent} from './home/home.component'
import {PortfolioComponent} from './portfolio/portfolio.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app works!';
}
