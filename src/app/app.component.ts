import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tg-live-chat-app';

  loadMore() {
    console.log('load more')
  }

  sendMessage($event: any) {
    console.log($event.message)
  }
}
