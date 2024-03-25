import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'login-page';

  check(myData: {checkVal: string}){
    if(myData.checkVal == '512388'){
      alert('Valid Usesr')
    }
    else alert('Invalid User')
  }
}
