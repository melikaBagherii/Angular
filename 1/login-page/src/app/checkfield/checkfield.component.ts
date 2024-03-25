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
}