import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ModalComponent } from './modal/modal.component';
import { ModalModule } from './modal/modal.module';
import { ParentModule } from './parent/parent.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ModalModule,
    ParentModule,
  ],
  providers: [],
  entryComponents: [ModalComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
