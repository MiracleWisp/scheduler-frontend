import {NgDompurifySanitizer} from "@tinkoff/ng-dompurify";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TUI_SANITIZER, TuiDialogModule, TuiNotificationsModule, TuiRootModule} from "@taiga-ui/core";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    TuiRootModule,
    BrowserAnimationsModule,
    TuiDialogModule,
    TuiNotificationsModule
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
