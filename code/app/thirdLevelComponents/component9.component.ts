import { Component, AfterViewChecked, NgZone, ElementRef } from '@angular/core';
import { toggleClass } from './../toggleClass';

@Component({
    selector: 'component-9',
    template: '<div class="child-component level-three component-9">9</div>',
    styleUrls: [ 'app/child.components.css' ]
})
export class Component9Component implements AfterViewChecked {
    
    constructor(private zone: NgZone, private el: ElementRef) {}

    ngAfterViewChecked () {
        toggleClass(this.el, this.zone);
    }

}