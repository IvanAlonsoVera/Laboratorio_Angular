import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { ProductComponent } from "./product/component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { PaAttrDirective } from "./directives/attr.directive";

import { PaModel } from "./directives/twoway.directive";



@NgModule({

  declarations: [ProductComponent, PaAttrDirective, PaModel],

  imports: [BrowserModule, FormsModule, ReactiveFormsModule],

  providers: [],

  bootstrap: [ProductComponent]

})

export class AppModule { }

