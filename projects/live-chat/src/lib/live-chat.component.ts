import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Message} from "./models/message";
import {ChatUser} from "./models/chat-user";
import {SendingMessage} from "./models/sending-message";
import {HeaderInfo} from "./models/header-info";

@Component({
  selector: 'tg-live-chat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.scss']
})
export class LiveChatComponent implements OnInit {

  private CURRENT_YEAR = new Date().getFullYear();
  isOpened: boolean = false;
  messageContent: string = '';
  files: File[] = [];

  @Input() placeholderEditor = 'Message';
  @Input() isChat = true;
  @Input() headerInfo: HeaderInfo | undefined;
  @Input() messages: Message[] = [];
  @Input() users: ChatUser[] = [];

  @Output() loadMore = new EventEmitter();
  @Output() send = new EventEmitter<SendingMessage>();
  @Output() open = new EventEmitter();
  @Output() close = new EventEmitter();

  @ViewChild('inputFiles') inputFiles: any;


  constructor() {
  }

  ngOnInit(): void {
    document.execCommand("defaultParagraphSeparator", false, "br");
    this.messages.sort((a, b) => (+new Date(b.date)) - (+new Date(a.date)));
  }

  scrollMessages($event: any) {
    if (Math.ceil($event.target.offsetHeight - $event.target.scrollTop) >= $event.target.scrollHeight) {
      this.loadMore.emit();
    }
  }

  editorKeydown($event: KeyboardEvent, editor: any) {
    if ($event.ctrlKey && $event.key == 'Enter') {
      document.execCommand('insertLineBreak');
      editor.scrollTop = editor.scrollHeight;
      return false;
    } else if ($event.key == 'Enter') {
      this.sendMessage(editor);
      return false;
    }
    return true;
  }


  inputMessage($event: any) {
    this.messageContent = $event.target.innerText;
  }

  findAuthor(idUser: any) {
    return this.users.find(v => v.id == idUser);
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

  sendMessage(editor: any) {
    if (this.messageContent || (this.files && this.files.length > 0)) {
      this.send.emit({message: this.messageContent, files: this.files});
      editor.innerHTML = '';
      this.messageContent = '';
      this.files = [];
      this.inputFiles.nativeElement.value = null;
    }
  }

  uploadFiles($event: any) {
    for (const file of $event.target.files) {
      this.files.push(file);
    }
  }

  deleteAttachment(i: number) {
    this.files.splice(i, 1);
  }

  openDialog() {
    this.isOpened = true;
    this.open.emit();
  }

  closeDialog(){
    this.isOpened = false;
    this.close.emit();
  }
}
