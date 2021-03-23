import { Directive, ElementRef, OnInit, AfterViewInit, Input } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, pluck } from 'rxjs/operators';

@Directive( {
    selector: '[strechHeight]',
})
export class StretchHeightDirective implements OnInit{

    @Input() startingPoint: number

    public smallWidth = 450
    public medWidth = 700
    public largeWidth = 1380
    public extraLargeWidth = 1600
    public fullHeight = window.innerHeight
    public fullWidth = window.innerWidth


    constructor (
        private elementRef: ElementRef,

    ) {
        this.startingPoint = 50
    }

    ngOnInit() {

        fromEvent( window, 'load' ).pipe(
            debounceTime( 500 ), pluck<any, number>( 'currentTarget', 'innerHeight')
        ).subscribe( event => { this.heightStreched(event) } )

        fromEvent( window, 'resize' ).pipe<any, number>(
            debounceTime( 500 ), pluck( 'currentTarget', 'innerHeight' )
        ).subscribe( event => { this.heightStreched(event)})
    }



    public get deviceSize() {
        if ( this.fullWidth < this.smallWidth ) {
            return 'small'
        } else if ( this.fullWidth < this.medWidth && this.fullWidth > this.largeWidth ) {
            return 'med'
        } else if ( this.fullWidth < this.largeWidth && this.fullWidth > this.extraLargeWidth ) {
            return 'large'
        } else if ( this.fullWidth > this.largeWidth ) {
            return 'extraLarge'
        } else {
          return 'unrecognized'
        }
    }

    heightStreched( currentHeight: number ) {
        var y = this.elementRef.nativeElement.getBoundingClientRect().y
        var height = this.deviceSize != 'small' ?
            currentHeight - y : currentHeight - y - this.startingPoint
        this.elementRef.nativeElement.style.height = height+'px'

    }

    // hide() {
    //     window.screen.width < this.smallWidth ? true : false
    //     this.elementRef.nativeElement.style.display = 'none';
    // }
}
