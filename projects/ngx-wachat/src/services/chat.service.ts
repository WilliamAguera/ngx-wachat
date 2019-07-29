import {EventEmitter, Injectable} from '@angular/core';
import {ChatMessage} from '../interfaces/chat-message.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private messageList: ChatMessage[] = [];

  public change: EventEmitter<ChatMessage[]> = new EventEmitter();

  get messages() {
    return this.messageList;
  }

  constructor() { }

  loadMessages(collection: ChatMessage[]) {
    this.messageList = collection;
    this.change.next(this.messages);
  }

  send(message: ChatMessage) {
    this.messageList = [ ...this.messageList, message ];
    this.change.next(this.messages);
  }

}
