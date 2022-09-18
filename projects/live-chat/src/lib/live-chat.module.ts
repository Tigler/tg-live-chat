import {NgModule} from '@angular/core';
import {LiveChatComponent} from './live-chat.component';
import {DatePipe, NgClass, NgForOf, NgIf, NgTemplateOutlet} from "@angular/common";
import {ResizeDirective} from './directives/resize/resize.directive';
import {NgVarDirective} from './directives/ng-var/ng-var.directive';
import { BreakLineReplacePipe } from './pipes/break-line-replace/break-line-replace.pipe';


@NgModule({
  declarations: [
    LiveChatComponent,
    ResizeDirective,
    NgVarDirective,
    BreakLineReplacePipe
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
export class LiveChatModule {
}
