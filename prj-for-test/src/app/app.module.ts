import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { HttpClientModule } from "@angular/common/http";
import { RoutingComponent } from './routing/routing.component';
import { AppRoutingModule } from "./app.routing.module";
import { NavbarComponent } from "./routing/navbar/navbar.component";

@NgModule({
    declarations: [
        AppComponent,
        MyComponentComponent,
        RoutingComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
