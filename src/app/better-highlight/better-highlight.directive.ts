import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @HostBinding('style.backgroundColor') myBackgroundColor: string = 'transparent';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
      // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','orange');
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','orange');
    this.myBackgroundColor = 'orange'
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent');
    this.myBackgroundColor = 'yellow'
  }
}
