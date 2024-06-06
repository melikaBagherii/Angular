import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Observables';

  username: string= ''
  userStatus: boolean=false
  // buttonClicked: boolean=false
  constructor(private userService: UsersService){}

  ngOnInit(){
      this.userService.loginSubject.subscribe(status => {
        this.userStatus = status
      })
  }
  onLogin(username: string){
    this.username = username
    this.userService.loginCheck(username)
  }
}
