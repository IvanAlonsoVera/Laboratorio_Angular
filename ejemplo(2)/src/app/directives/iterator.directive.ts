import {
  Directive, ViewContainerRef, TemplateRef,
  Input, SimpleChange
} from "@angular/core";

@Directive({
  selector: "[paForOf]"
})

export class PaIteratorDirective {

  constructor(private container: ViewContainerRef,
    private template: TemplateRef<Object>) { }

  @Input("paForOf")
  dataSource: any;


  //pinta las vistas 
  ngOnInit() {
    this.container.clear();
    for (let i = 0; i < this.dataSource.length; i++) {
      this.container.createEmbeddedView(this.template,
        new PaIteratorContext(this.dataSource[i], i, this.dataSource.length));
    }
  }
}

class PaIteratorContext {
  odd: boolean = false;
  even: boolean = false;
  first: boolean = false;
  last: boolean = false;

  constructor(public $implicit: any, public index: number, total: number) {
    this.odd = index % 2 == 1;
    this.even = !this.odd;
    this.first = index == 0;
    this.last = index == total - 1;
  }
} 
