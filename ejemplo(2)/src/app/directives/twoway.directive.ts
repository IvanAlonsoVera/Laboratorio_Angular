import {
  Input, Output, EventEmitter, Directive,
  HostBinding, HostListener, SimpleChange
} from "@angular/core";

@Directive({
  selector: "input[paModel]",
  exportAs: "paModel"
})

export class PaModel {
  //nos traemos datos para el product.name
  @Input("paModel")
    //model property es lo que recibe del template
  modelProperty: string | undefined;
  @HostBinding("value")
  fieldValue: string = "";
  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    let change = changes["modelProperty"];
    if (change.currentValue != this.fieldValue) {
      this.fieldValue = changes["modelProperty"].currentValue || "";
    }
  }
  //con esto lo llevamos al imput del formulario
  @Output("paModelChange")
  update = new EventEmitter<string>();
  @HostListener("input", ["$event.target.value"])
  updateValue(newValue: string) {
    this.fieldValue = newValue;
    this.update.emit(newValue);
  }
} 
