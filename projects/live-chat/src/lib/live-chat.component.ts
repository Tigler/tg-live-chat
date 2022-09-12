import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from "./model/message";
import {ChatUser} from "./model/chat-user";
import {SendingMessage} from "./model/sending-message";

@Component({
  selector: 'tg-live-chat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.scss']
})
export class LiveChatComponent implements OnInit {

  private CURRENT_YEAR = new Date().getFullYear();
  isOpened: boolean = true;
  @Input() placeholderEditor = 'Message';
  chatUser = {
    logoUrl: 'https://sun4-15.userapi.com/znUVrn03HYl3Iw0O_m-N5ht2kMtmcFb8I3HBiQ/hciP6yRUk08.png',
    name: 'Иванов Иван'
  };

  @Input() messages: Message[] = [
    {idUser: 1, date: new Date(new Date().getTime() + 1000000), text: 'Message sdfsdf ssssss sdfsdfs sdfsfsdfsfsdsf'},
    {idUser: 2, date: new Date(new Date().getTime() + 10000000), text: 'Message1 sdfsdf sdfjkjsdf ', self: true},
    {idUser: 1, date: new Date(new Date().getTime() - 100000000000), text: 'Message2 dsfsdf'},
    {
      idUser: 2,
      date: new Date(),
      text: 'Message3 sdfsf sdfsfsf sdfsdf sdfsdf sdfsdfgd dfgdfgdfg dfgdfgdfgdfg dfgdfgdfgdf sdfsd',
      self: true
    },
    {idUser: 1, date: new Date(), text: 'Message4ddd'},
    {idUser: 1, date: new Date(), text: 'Message sdfsdf ssssss sdfsdfs sdfsfsdfsfsdsf'},
    {idUser: 2, date: new Date(), text: 'Message1 sdfsdf sdfjkjsdf ', self: true},
    {idUser: 1, date: new Date(new Date().getTime() + 1000000000), text: 'Message2 dsfsdf'},
    {
      idUser: 2,
      date: new Date(),
      text: 'Message3 sdfsf sdfsfsf sdfsdf sdfsdf sdfsdfgd dfgdfgdfg dfgdfgdfgdfg dfgdfgdfgdf sdfsd',
      self: true
    },
    {idUser: 1, date: new Date(), text: 'Message4ddd',
      attachments: [
        {url: 'localhost', name: 'fileName', ext: 'pdf'}
      ], self: true},
    {idUser: 1, date: new Date(), text: 'Message sdfsdf ssssss sdfsdfs sdfsfsdfsfsdsf'},
    {idUser: 2, date: new Date(), text: 'Message1 sdfsdf sdfjkjsdf ', self: true},
    {idUser: 1, date: new Date(), text: 'Message2 dsfsdf'},
    {
      idUser: 2,
      date: new Date(),
      text: 'Message3 sdfsf sdfsfsf sdfsdf sdfsdf sdfsdfgd dfgdfgdfg dfgdfgdfgdfg dfgdfgdfgdf sdfsd',
      self: true
    },
    {idUser: 1, date: new Date(), text: 'Message4ddd'},
    {idUser: 1, date: new Date(), text: 'Message sdfsdf ssssss sdfsdfs sdfsfsdfsfsdsf'},
    {idUser: 2, date: new Date(), text: 'Message1 sdfsdf sdfjkjsdf ', self: true},
    {idUser: 1, date: new Date(), text: 'Message2 dsfsdf'},
    {
      idUser: 2,
      date: new Date(),
      text: 'Message3 sdfsf sdfsfsf sdfsdf sdfsdf sdfsdfgd dfgdfgdfg dfgdfgdfgdfg dfgdfgdfgdf sdfsd',
      self: true
    },
    {idUser: 1, date: new Date(), text: 'Message4ddd'},
    {idUser: 1, date: new Date(), text: 'Message sdfsdf ssssss sdfsdfs sdfsfsdfsfsdsf'},
    {idUser: 2, date: new Date(), text: 'Message1 sdfsdf sdfjkjsdf ', self: true},
    {idUser: 1, date: new Date(), text: 'Message2 dsfsdf'},
    {
      idUser: 2,
      date: new Date(),
      text: 'Message3 sdfsf sdfsfsf sdfsdf sdfsdf sdfsdfgd dfgdfgdfg dfgdfgdfgdfg dfgdfgdfgdf sdfsd',
      self: true
    },
    {idUser: 1, date: new Date(), text: 'Message4ddd'}
  ];
  @Input() users: ChatUser[] = [
    {
      id: 1,
      logoUrl: 'https://sun4-15.userapi.com/znUVrn03HYl3Iw0O_m-N5ht2kMtmcFb8I3HBiQ/hciP6yRUk08.png',
      name: 'Иванов Иван'
    }
  ];

  @Output() loadMore = new EventEmitter();
  @Output() send = new EventEmitter<SendingMessage>();
  messageContent: string | null = null;

  constructor() {
  }

  ngOnInit(): void {
    document.execCommand("defaultParagraphSeparator", false, "br");
    this.messages.sort((a, b) => (+new Date(b.date)) - (+new Date(a.date)));
  }

  scrollMessages($event: any) {
    if ($event.target.offsetHeight - $event.target.scrollTop >= $event.target.scrollHeight) {
      this.loadMore.emit();
    }
  }

  editorKeydown($event: KeyboardEvent, editor: any) {
    if ($event.ctrlKey && $event.key == 'Enter') {
       document.execCommand('insertLineBreak');
       editor.scrollTop = editor.scrollHeight;
      return false;
    } else if ($event.key == 'Enter') {
      if (this.messageContent) {
        this.send.emit({message: this.messageContent});
        editor.innerHTML = '';
        return false;
      }
    }
    return true;
  }


  inputMessage($event: any) {
    this.messageContent = $event.target.innerText;
  }

  nextDate(curDate: Date, nextDate: Date | undefined) {
    if (!nextDate
      || curDate.getDate() != nextDate.getDate()
      || curDate.getMonth() != nextDate.getMonth()
      || curDate.getFullYear() != nextDate.getFullYear()) {
      return curDate;
    }
    return null;
  }

  isCurrentYear(dateNext: Date) {
    return dateNext.getFullYear() == this.CURRENT_YEAR;
  }
}
