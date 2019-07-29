import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ChatContact} from '../../interfaces/chat-contact.interface';
import {ChatMessage} from '../../interfaces/chat-message.interface';
import {ChatStatus} from '../../enums/status.enum';

@Component({
  selector: 'ngx-wachat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class NgxWachatComponent implements OnInit {

  @Input() contacts: ChatContact[] = [];

  @Input() origin: ChatContact;

  @Input() placeholder = 'Say Hi';

  @Input() statusColor = {
    online: '#66CC99',
    busy: '#CCBF72',
    offline: '#CC575A'
  };

  @Input() height = '400px';

  @Input() width = '350px';

  @Input() color = '#629ce4';

  @Input() emptyListDescription = 'No Contacts Found';

  @Output() sendMessage: EventEmitter<ChatMessage> = new EventEmitter();

  public selected: ChatStatus = ChatStatus.ONLINE;

  public destination: ChatContact;

  public messaging = false;

  get online() {
    return ChatStatus.ONLINE;
  }

  get offline() {
    return ChatStatus.OFFLINE;
  }

  get busy() {
    return ChatStatus.BUSY;
  }

  constructor() {
  }

  ngOnInit() {
  }

  selectTo(contact: ChatContact) {
    this.destination = contact;
    this.messaging = true;
  }

  selectStatus(status: ChatStatus) {
    this.selected = status;
  }

  onSendMessage(value: string) {
    this.sendMessage.emit({
      origin: this.origin,
      destination: this.destination,
      message: value,
      date: new Date()
    });
  }

}
