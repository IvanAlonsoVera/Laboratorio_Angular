import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { ProductComponent } from "./product/component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { PaAttrDirective } from "./directives/attr.directive";

import { PaModel } from "./directives/twoway.directive";
import { PaStructureDirective } from './directives/structure.directive';
import { PaIteratorDirective } from './directives/iterator.directive';
import { ProductTableComponent } from './product/productTable.component';
import { ProductFormComponent } from './product/productForm.component'; 


@NgModule({

  declarations: [ProductComponent, PaAttrDirective, PaModel, PaStructureDirective,
    PaIteratorDirective, ProductTableComponent, ProductFormComponent],

  imports: [BrowserModule, FormsModule, ReactiveFormsModule],

  providers: [],

  bootstrap: [ProductComponent]

})

export class AppModule { }

