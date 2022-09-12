import {Attachment} from "./attachment";

export interface Message {
  idUser: any;
  date: Date;
  text: string;
  attachments?: Attachment[];
  self?: boolean;
}
