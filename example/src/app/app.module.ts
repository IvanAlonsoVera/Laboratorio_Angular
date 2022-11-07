import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ProductComponent } from "./product/component";
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { PaAttrDirective } from "./directives/attr.directive";
import { PaModel } from "./directives/twoway.directive";
import { PaStructureDirective } from "./directives/structure.directive";
import { PaIteratorDirective } from "./directives/iterator.directive";
import { PaCellColor } from "./directives/cellColor.directive";
import { PaCellColorSwitcher } from "./directives/cellColorSwitcher.directive";
import { ProductTableComponent } from "./product/productTable.component";
import { ProductFormComponent } from "./product/productForm.component";
import { PaToggleView } from "./toggleView.component";
import { PaAddTaxPipe } from "./pipes/addTax.pipe";
import { PaCategoryFilterPipe } from "./pipes/categoryFilter.pipe";
import { LOCALE_ID } from "@angular/core";
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs); 

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [ProductComponent, PaAttrDirective, PaModel,
        PaStructureDirective, PaIteratorDirective,
        PaCellColor, PaCellColorSwitcher, ProductTableComponent,
        ProductFormComponent, PaToggleView, PaAddTaxPipe, PaCategoryFilterPipe],
    bootstrap: [ProductComponent],
    providers: [{ provide: LOCALE_ID, useValue: "es-ES" }]
})
export class AppModule { }
