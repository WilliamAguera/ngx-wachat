import {ChatStatus} from '../enums/status.enum';

export interface ChatContact {
  id: string | number;
  name: string;
  description: string;
  status: ChatStatus;
  avatar?: string;
}
