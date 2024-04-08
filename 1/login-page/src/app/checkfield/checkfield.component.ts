import { Component, ViewChild,EventEmitter, Output   } from '@angular/core';

@Component({
  selector: 'app-checkfield',
  templateUrl: './checkfield.component.html',
  styleUrl: './checkfield.component.css'
})
export class CheckfieldComponent {
  checkValue = '';
  @Output() onLoginClicked = new EventEmitter<{checkVal: string}>(); 
  
  check(){
    // alert(this.checkValue)
    this.onLoginClicked.emit({checkVal: this.checkValue});
  }


  // onCharacterTyped(event: Event){
  //   const inputElement = event.target as HTMLInputElement;
  //   let inputValue = inputElement.value;
  //   const selectionStart = inputElement.selectionStart;
  //   const selectionEnd = inputElement.selectionEnd;
    
  //   // Get the typed character
  //   const typedCharacter = inputValue.charAt(selectionStart - 1);

  //   // Replace 's' with 'm'
  //   if (isNaN(Number(typedCharacter))) {
  //     inputValue = inputValue.substring(0, selectionStart - 1) + '' + inputValue.substring(selectionEnd);
  //     inputElement.value = inputValue;
  //     inputElement.setSelectionRange(selectionStart, selectionStart);
  //     event.preventDefault(); // Prevent default action
  //   }

  //   // You can perform further processing here if needed
  // }
}