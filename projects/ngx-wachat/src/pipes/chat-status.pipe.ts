import { Pipe, PipeTransform } from '@angular/core';
import {ChatContact} from '../interfaces/chat-contact.interface';
import {ChatStatus} from '../enums/status.enum';

@Pipe({
  name: 'status'
})
export class ChatStatusPipe implements PipeTransform {

  transform(value: ChatContact[], status: ChatStatus[] ): any {
    const filter = value.filter(item => status.indexOf(item.status) >= 0 );
    return filter.length > 0 ? filter : null;
  }

}
