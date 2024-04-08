import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyusernameComponent } from './myusername/myusername.component';
import { MypasswordComponent } from './mypassword/mypassword.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { LoginbuttonComponent } from './loginbutton/loginbutton.component';
import { CheckfieldComponent } from './checkfield/checkfield.component';
import { FormsModule } from '@angular/forms';
import { NumericOnlyDirective } from './numeric-only.directive';
import { UsernameFormatDirective } from './username-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyusernameComponent,
    MypasswordComponent,
    LoginbuttonComponent,
    CheckfieldComponent,
    NumericOnlyDirective,
    UsernameFormatDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
