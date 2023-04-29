import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CardComponent } from './components/card/card.component';
import { LabelComponent } from './components/card/label/label.component';
import { PrincingComponent } from './components/card/princing/princing.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CardComponent,
    LabelComponent,
    PrincingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
