import { Component, AfterViewChecked, OnInit, NgZone, ElementRef, ChangeDetectorRef } from '@angular/core';
import { toggleClass } from './../toggleClass';
import { DataService } from '../shared/data.service';

@Component({
    selector: 'component-8',
    template: '<div class="child-component level-three component-8">8{{letter}}</div>',
    styleUrls: [ 'app/child.components.css' ],
    providers: [ DataService ]
})
export class Component8Component implements AfterViewChecked {
    public letter: string;
    
    constructor(private zone: NgZone,
                private data: DataService,
                private cd: ChangeDetectorRef,
                private el: ElementRef) {}

    ngAfterViewChecked () {
        toggleClass(this.el, this.zone);
    }

    ngOnInit() {
        // this.data.stream.subscribe((w) => {
        //     console.log('from component 8: stream info ');
        //     this.letter = w;
        //     // this.cd.markForCheck();
        // });
    }
}