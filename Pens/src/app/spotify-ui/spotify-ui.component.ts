import { Component, OnInit } from '@angular/core';
import { PlaylistBarComponent} from './playlist-bar/playlist-bar.component';
import { PlayBarComponent } from './play-bar/play-bar.component';

@Component({
  selector: 'app-spotify-ui',
  templateUrl: './spotify-ui.component.html',
  styleUrls: ['./spotify-ui.component.scss']
})
export class SpotifyUIComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
