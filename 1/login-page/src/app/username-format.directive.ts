import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appUsernameFormat]'
})
export class UsernameFormatDirective {

  @HostListener('input', ['$event']) onInput(event: any) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    input.value = value.replace(/[#@]/g, '');
  }

}
