# TgLiveChat

Angular live chat component
## Install

npm install tg-live-chat

## Import

> import {LiveChatModule} from "live-chat";

## Getting Started

> <tg-live-chat [headerInfo]="headerInfo" [users]="chatUsers" [messages]="messages"
(loadMore)="loadMore()"
(send)="sendMessage($event)"
(open)="open()"
(close)="close()"></tg-live-chat>

## Properties

| Name       | Type   | Description                                         |
|------------|--------|-----------------------------------------------------|
| headerInfo | Object | Information in chat header. Interface - HeaderInfo. |
| users      | Array  | Chat users. Interface - ChatUser.                   |
| messages   | Array  | Chat messages. Interface - Message.                 |

## Events

| Name     | Description                                                                     |
|----------|---------------------------------------------------------------------------------|
| loadMore | Event emitting when reached top the chat. Use for load parts of older messages. |
| send     | Event emitting send message.                                                    |
| open     | Event emitting open dialog.                                                     |
| close    | Event emitting close dialog.                                                    |

