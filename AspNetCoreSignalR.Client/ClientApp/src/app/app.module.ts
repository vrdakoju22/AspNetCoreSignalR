import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { ChatComponent } from "./chat/chat.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { HeaderComponent } from "./layout/header/header.component";
import { LayoutComponent } from "./layout/layout.component";
import { MainComponent } from "./layout/main/main.component";

const ROUTES: Routes = [
    { path: "", component: ChatComponent, pathMatch: "full" },
    { path: "**", redirectTo: "" }
];

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        ChatComponent,
        FooterComponent,
        HeaderComponent,
        LayoutComponent,
        MainComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        RouterModule.forRoot(ROUTES)
    ]
})
export class AppModule { }
