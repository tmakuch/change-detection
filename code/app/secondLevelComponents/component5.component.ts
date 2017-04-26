import { Component, OnInit, AfterViewChecked, NgZone, ElementRef } from '@angular/core';
import { toggleClass } from './../toggleClass';

@Component({
    selector: 'component-5',
    template: `
        <div class="child-component level-two component-5">
            5
            <component-9></component-9>
        </div>`,
    styleUrls: [ 'app/child.components.css' ]
})
export class Component5Component implements AfterViewChecked {
    
    constructor(private zone: NgZone, private el: ElementRef) {}

    ngAfterViewChecked () {
        toggleClass(this.el, this.zone);
    }

    ngOnInit() {
        // setTimeout(() => {
        //     console.log('from component 5: timeout');
        // }, 7000);
    }
}