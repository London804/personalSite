import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appFixed]'
})
export class FixedDirective {
	constructor() {
		console.log('this is working');
		this.onResize(event);
	}
	@HostListener('onResize', ['$event'])
	  	onResize(event) {
	 		event.target.innerWidth;

	 		if(event.target.innerWidth > '748px') {
			// this.left = 800 - $(document).scrollLeft()
			// this.style.left = 800 - document.scrollLeft
				console.log('you got small');
			}
		}

}
