import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { PlaylistBarComponent } from './spotify-ui/playlist-bar/playlist-bar.component';
import { SpotifyUIComponent } from './spotify-ui/spotify-ui.component';


@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    PlaylistBarComponent,
    SpotifyUIComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'portfolio', component: PortfolioComponent},
      { path: 'spotify', component: SpotifyUIComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
