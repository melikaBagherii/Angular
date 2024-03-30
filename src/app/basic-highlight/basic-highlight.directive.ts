import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{
    constructor(private elemenRef : ElementRef){

    }

    ngOnInit(){
        this.elemenRef.nativeElement.style.backgroundColor = 'green'
    }
}