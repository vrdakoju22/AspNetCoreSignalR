import { Component, ElementRef, ViewChild } from "@angular/core";
import { ChatModel } from "./chat.model";
import { ChatService } from "./chat.service";

@Component({ selector: "app-chat", templateUrl: "./chat.component.html" })
export class ChatComponent {
    model = new ChatModel();
    @ViewChild("messages") messages: ElementRef;

    constructor(private readonly chatService: ChatService) {
        this.model.name = this.random();
        this.registerEvents();
    }

    registerEvents() {
        this.chatService.sendToAllEvent.subscribe((model: ChatModel) => {
            this.messages.nativeElement.innerHTML += `<b>${model.name}: </b> ${model.message} <br />`;
        });
    }

    submit() {
        this.chatService.sendToAll(this.model).then(() => { this.model.message = ""; });
    }

    private random() {
        let text = "";

        const possible = "abcdefghijklmnopqrstuvwxyz";

        for (let i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }
}
