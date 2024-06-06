import { Injectable } from "@angular/core"
import { Subject } from "rxjs"
@Injectable({
    providedIn: 'root'
})
export class UsersService{
    users = [
        {
            name: 'melika',
            loggedIn: true
        },
        {
            name: 'nima',
            loggedIn: true
        },
        {
            name: 'rojin',
            loggedIn: false
        }
    ]

    loginSubject = new Subject<boolean>()

    loginCheck(username: string){
        const user = this.users.find(user => user.name.toLowerCase() === username.toLowerCase())
        if (user){
            this.loginSubject.next(user.loggedIn)
        }
        else{
            this.loginSubject.next(false)
        }
    }
}