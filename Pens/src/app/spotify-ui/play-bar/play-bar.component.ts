import { Component, OnInit,  NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NouisliderModule } from 'ng2-nouislider';

@Component({
  selector: 'app-play-bar',
  templateUrl: './play-bar.component.html',
  styleUrls: ['./play-bar.component.scss']
})
export class PlayBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

	onResize(event) {
  		event.target.innerWidth;
  		console.log(event.target.innerWidth);

  		if(event.target.innerWidth === '800px') {
  			// this.left = 800 - $(document).scrollLeft()
  		}
	}
// $('.b').css({
//         'left': 400 - $(document).scrollLeft()
//     });
}
