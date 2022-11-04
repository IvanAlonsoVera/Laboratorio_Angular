import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { CurseComponent } from './Curse/component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    CurseComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [CurseComponent]
})
export class AppModule { }

