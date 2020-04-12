import {ModuleWithProviders, NgModule} from '@angular/core';
import {NgxWachatComponent} from './components/chat/chat.component';
import {ChatStatusPipe} from './pipes/chat-status.pipe';
import {NgxWachatContentComponent} from './components/chat-content/chat-content.component';
import {ChatService} from './services/chat.service';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    NgxWachatComponent,
    NgxWachatContentComponent,
    ChatStatusPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    NgxWachatComponent,
    NgxWachatContentComponent
  ],
  providers: [ ChatService ]
})
export class NgxWachatModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxWachatModule,
      providers: [ ChatService ]
    };
  }
}
