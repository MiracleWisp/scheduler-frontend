import {NgDompurifySanitizer} from "@tinkoff/ng-dompurify";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  TUI_SANITIZER,
  TuiButtonModule, TuiDataListModule,
  TuiDialogModule, TuiDropdownControllerModule, TuiHostedDropdownModule,
  TuiLinkModule,
  TuiNotificationsModule,
  TuiRootModule, TuiSvgModule
} from "@taiga-ui/core";
import {APP_INITIALIZER, LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HeaderComponent} from './components/header/header.component';
import {AuthService} from "./services/auth.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CURRENT_USER} from "./util/injection-tokens";
import {AuthInterceptor} from "./interceptors/auth.interceptor";
import {TuiAvatarModule} from "@taiga-ui/kit";
import {TuiActiveZoneModule} from "@taiga-ui/cdk";
import {TuiSidebarModule} from "@taiga-ui/addon-mobile";

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
    TuiNotificationsModule,
    HttpClientModule,
    TuiLinkModule,
    TuiButtonModule,
    TuiAvatarModule,
    TuiHostedDropdownModule,
    TuiDropdownControllerModule,
    TuiDataListModule,
    TuiSvgModule,
    TuiSidebarModule,
    TuiActiveZoneModule
  ],
  providers: [
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (appInitService: AuthService) => appInitService.fetchUserOnBootstrap(),
      deps: [AuthService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: LOCALE_ID, useValue: 'ru-RU',
    },
    {
      provide: CURRENT_USER,
      useFactory: (authService: AuthService) => authService.currentUser,
      deps: [AuthService],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
