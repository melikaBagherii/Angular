import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-checkfield',
  templateUrl: './checkfield.component.html',
  styleUrl: './checkfield.component.css'
})
export class CheckfieldComponent {
  check(inputValue){
    let value = inputValue.value
    if(value == '512388'){
      alert('Valid User')
    }
    else{
      alert('Invalid User')
    }
  }
}
