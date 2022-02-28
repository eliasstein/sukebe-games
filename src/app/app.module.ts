import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DisqusModule } from "ngx-disqus";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ErogesComponent } from './components/eroges/eroges.component';
import { RpgComponent } from './components/rpg/rpg.component';
import { AndroidComponent } from './components/android/android.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { InfoComponent } from './components/info/info.component';
import { AdvertenciaComponent } from './components/advertencia/advertencia.component';
import { MainComponent } from './components/main/main.component';
import { DisqComponent } from './components/disq/disq.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErogesComponent,
    RpgComponent,
    AndroidComponent,
    ContactanosComponent,
    InfoComponent,
    AdvertenciaComponent,
    MainComponent,
    DisqComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DisqusModule.forRoot('sukebe-games'),
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
