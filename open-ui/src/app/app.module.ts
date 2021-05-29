import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiComponent } from './app/ui/ui.component';
import { HeaderComponent } from './app/ui/header/header.component';
import { ContentComponent } from './app/ui/content/content.component';
import { CalculatorComponent } from './app/ui/content/calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import {SliderModule} from 'primeng/slider';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './app/ui/content/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    UiComponent,
    HeaderComponent,
    ContentComponent,
    CalculatorComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SliderModule,
    BrowserAnimationsModule,
    InputTextModule,
    DropdownModule,
    InputSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
