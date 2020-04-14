import { Component } from '@angular/core';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  private messagesSubscription$ = this.messageService.messages$;

  constructor(private messageService: MessageService) {}

  public clear(): void {
    this.messageService.clear();
  }

}
