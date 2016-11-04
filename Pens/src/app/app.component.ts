import { Component } from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home/home.component'
import {PortfolioComponent} from './portfolio/portfolio.component'

@RouteConfig([
    { path: '/home', component: HomeComponent, name: 'home' },
    { path: '/portfolio', component: PortfolioComponent, name: 'portfolio' }
])

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
}
