import {User} from './user.model';

export interface Comment {
  id: number;
  date: Date;
  content: string;
  user: User;
}
