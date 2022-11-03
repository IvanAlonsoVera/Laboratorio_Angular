import {
  Directive, ElementRef, Attribute,
  Input, SimpleChange, Output, EventEmitter
} from "@angular/core";
import { Curse } from "../Curse/curse.model";

@Directive({
  selector: "[pa-attr]"
})

export class PaAttrDirective {
  constructor(private element: ElementRef) {
    this.element.nativeElement.addEventListener("click", () => {
      if (this.curse != null) {
        this.click.emit(this.curse.category);
      }
    });
  }

  @Input("pa-attr")

  bgClass: any;

  @Input("pa-product")

  product?: Product;

  @Output("pa-category")

  click = new EventEmitter<string>();

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    let change = changes["bgClass"];
    let classList = this.element.nativeElement.classList;
    if (!change.isFirstChange() && classList.contains(change.previousValue)) {
      classList.remove(change.previousValue);
    }
    if (!classList.contains(change.currentValue)) {
      classList.add(change.currentValue);
    }
  }
} 
