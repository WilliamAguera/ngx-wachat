import {ChatContact} from './chat-contact.interface';

export interface ChatMessage {
  origin: ChatContact;
  destination: ChatContact;
  message: string;
  date: Date;
}
