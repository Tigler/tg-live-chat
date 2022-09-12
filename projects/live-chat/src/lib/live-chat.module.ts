import { NgModule } from '@angular/core';
import { LiveChatComponent } from './live-chat.component';
import {DatePipe, NgClass, NgForOf, NgIf, NgTemplateOutlet} from "@angular/common";
import { ResizeDirective } from './directives/resize/resize.directive';



@NgModule({
  declarations: [
    LiveChatComponent,
    ResizeDirective
  ],
    imports: [
        NgIf,
        NgForOf,
        NgClass,
        DatePipe,
        NgTemplateOutlet
    ],
  exports: [
    LiveChatComponent
  ]
})
export class LiveChatModule { }
