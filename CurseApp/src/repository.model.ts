import { Curse } from "./curse.model";
import { SimpleDataSource } from "./datasource.model";

export class Model {
  private dataSource: SimpleDataSource;
  private curses: Curse[];
  private locator= (p: Curse, id: number) => p.id == id;

  constructor(){
    this.dataSource = new SimpleDataSource();
    this.curses = new Array<Curse>();
    this.dataSource.getData().forEach(p => this.curses.push(p));
  }

  getCurses(): Curse[]{
    return this.curses;
  }

  getCurse(id: number): any {
    return this.curses.find(p=>this.locator(p,id))
  }

  saveCurse(product: any) {
    if (product.id == 0 || product.id == null) {
      product.id = this.generateID();
      this.curses.push(product);
    } else {
      let index = this.curses.findIndex(p => this.locator(p, product.id));
      this.curses.splice(index, 1, product);
    }
  }

  private generateID(): number {
    let candidate = 100;
    while (this.getCurse(candidate) != null) {
      candidate++;
    }
    return candidate;
  }

  deleteCurse(id: number) {
    let index = this.curses.findIndex(p => this.locator(p, id));
    if (index > -1) {
      this.curses.splice(index, 1);
    }
  }
}
