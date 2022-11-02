import { Product } from "./product.model";

export class SimpleDataSource {
  private data: Product[];

  constructor() {
    this.data = new Array<Product>(
      new Product(1, "kayak", "WaterSport", 275),
      new Product(2, "lifejacket", "WaterSport", 48.95),
      new Product(3, "Soccer Ball", "Soccer", 18.95),
      new Product(4, "Corner Flags", "Soccer", 34.95),
      new Product(6, "Thinking Cap", "Chess", 16)
    )
  }

  getData(): Product[] {
    return this.data;
  }

}
