import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFixed]'
})
export class FixedDirective {
  constructor() {
  	console.log('this is working');

  	event.target;
  		console.log(event.target);

  		// if(event.target > '748px') {
  		// 	// this.left = 800 - $(document).scrollLeft()
  		// 	// this.style.left = 800 - document.scrollLeft
  		// }
  }

}
