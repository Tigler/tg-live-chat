import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tg-live-chat-app';


  messages = [
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
    {
      idUser: 1, date: new Date(), text: 'Message4ddd',
      attachments: [
        {url: 'localhost', name: 'fileName', ext: 'pdf'}
      ], self: true
    },
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
      text: 'Message3 long long long long long long long long',
      self: true
    },
    {idUser: 1, date: new Date(), text: 'Message4ddd'},
    {idUser: 1, date: new Date(), text: 'Message sdfsdf ssssss sdfsdfs sdfsfsdfsfsdsf'},
    {idUser: 2, date: new Date(), text: 'Message1 sdfsdf sdfjkjsdf ', self: true},
    {idUser: 1, date: new Date(), text: 'Message2 dsfsdf'},
    {
      idUser: 2,
      date: new Date(),
      text: 'Message long long long long long long',
      self: true
    },
    {idUser: 1, date: new Date(), text: 'Message4'}
  ];

  chatUsers = [
    {
      id: 1,
      logoUrl: 'https://sun4-15.userapi.com/znUVrn03HYl3Iw0O_m-N5ht2kMtmcFb8I3HBiQ/hciP6yRUk08.png',
      name: 'Иванов Иван'
    },
    {
      id: 2,
      logoUrl: 'https://sun4-15.userapi.com/znUVrn03HYl3Iw0O_m-N5ht2kMtmcFb8I3HBiQ/hciP6yRUk08.png',
      name: 'Петров Иван'
    }
  ];

  headerInfo = {
    thumbUrl: 'https://sun4-15.userapi.com/znUVrn03HYl3Iw0O_m-N5ht2kMtmcFb8I3HBiQ/hciP6yRUk08.png',
    title: 'Иванов Иван',
    subtitle: 'Менеджер',
  }


  loadMore() {
    this.messages.push({idUser: 1, date: new Date(new Date().getTime() - 1000000000000), text: 'Message2 dsfsdf'});
  }

  sendMessage($event: any) {
    this.messages.unshift({
      idUser: 2,
      date: new Date(new Date().getTime()),
      text: $event.message,
      self: true,
      attachments: $event.files
    });
  }

  open() {
    console.log('open')
  }

  close() {
    console.log('close')
  }
}
