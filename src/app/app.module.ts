import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxWachatModule} from '../../projects/ngx-wachat/src/ngx-wachat.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgxWachatModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
