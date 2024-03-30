import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'red';

  @HostBinding('style.backgroundColor') myBackgroundColor: string;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
      // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','orange');
      this.myBackgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','orange');
    this.myBackgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent');
    this.myBackgroundColor = this.defaultColor;
  }
}
