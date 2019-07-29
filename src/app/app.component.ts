import {Component} from '@angular/core';
import {ChatStatus} from '../../projects/ngx-wachat/src/enums/status.enum';
import {ChatService} from '../../projects/ngx-wachat/src/services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-chat';

  public contacts = [
    {
      id: '100',
      name: 'Paul Williams',
      description: 'Financial',
      status: ChatStatus.ONLINE
    },
    {
      id: '110',
      name: 'John Poke',
      description: 'Broker',
      status: ChatStatus.BUSY
    },
  ];

  public contacts2 = [
    {
      id: '200',
      name: 'Ana Clarke',
      description: 'Account Manager',
      status: ChatStatus.ONLINE
    },
    {
      id: '300',
      name: 'Taylor Abby',
      description: 'SEO',
      status: ChatStatus.ONLINE
    }
  ];

  public from = {
    id: '300',
    name: 'Taylor Abby',
    description: 'SEO',
    status: ChatStatus.ONLINE
  };

  public from2 = {
    id: '100',
    name: 'Paul Williams',
    description: 'Financial',
    status: ChatStatus.ONLINE
  };

  constructor( private chatService: ChatService ) {
  }

  onSendMessage($event) {
    console.log(`send`, $event);
    this.chatService.send($event);
  }

}
