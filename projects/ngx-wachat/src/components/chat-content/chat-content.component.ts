import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ChatContact} from '../../interfaces/chat-contact.interface';
import {ChatMessage} from '../../interfaces/chat-message.interface';
import {ChatService} from '../../services/chat.service';

@Component({
  selector: 'ngx-wachat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.scss']
})
export class NgxWachatContentComponent implements OnInit {

  @Input() origin: ChatContact;

  @Input() destination: ChatContact;

  @Input() height;

  @Input() placeholder = '';

  @Output() sendMessage: EventEmitter<string> = new EventEmitter();

  @ViewChild('scrollContent', { static: true }) scrollContent: ElementRef;

  public control = new FormControl(null);

  public messages: ChatMessage[] = [];

  constructor( private chatService: ChatService ) { }

  ngOnInit() {
    this.listenChangeMessages();
    this.messages = this.filterMessages(this.chatService.messages);
    this.scrollToBottom();
  }

  listenChangeMessages() {
    this.chatService.change.subscribe((messages: ChatMessage[]) => {
      this.messages = this.filterMessages( messages );
      this.scrollToBottom();
    });
  }

  filterMessages( collection: ChatMessage[] ) {
    return collection.filter(( item: ChatMessage ) =>
      (item.origin.id === this.origin.id) && (item.destination.id === this.destination.id) ||
      (item.origin.id === this.destination.id) && (item.destination.id === this.origin.id)
    );
  }

  onKeyEnter() {
    if (this.control.value) {
      this.sendMessage.emit(this.control.value);
      this.control.setValue('');
    }
  }

  scrollToBottom() {
    setTimeout(() => this.scrollContent.nativeElement.scrollTop = this.scrollContent.nativeElement.scrollHeight, 100);
  }

}
