import { Injectable } from "@angular/core";
import { HubConnection, HubConnectionBuilder } from "@aspnet/signalr";
import { Subject } from "rxjs";
import { environment } from "../../environments/environment";
import { ChatModel } from "./chat.model";

@Injectable({ providedIn: "root" })
export class ChatService {
    sendToAllEvent = new Subject<ChatModel>();
    private connection: HubConnection;

    constructor() {
        this.connection = new HubConnectionBuilder().withUrl(environment.chatHubUrl).build();
        this.connection.on("SendToAll", (model: ChatModel) => { this.sendToAllEvent.next(model); });
        this.startConnection();
    }

    sendToAll(model: ChatModel) {
        return this.connection.invoke("SendToAll", model);
    }

    private startConnection() {
        this.connection.start().catch((error: any) => {
            console.error(error);

            setTimeout(() => {
                this.startConnection();
            }, 5000);
        });
    }
}
