import { Curse } from "./curse.model";

export class SimpleDataSource {
  private data: Curse[];

  constructor() {
    this.data = new Array<Curse>(
      new Curse(1, "Agile", 20, "JohnJones"),
      new Curse(2, "C#", 15, "JohnJones"),
      new Curse(3, "Angular", 13, "RossMiller"),
      new Curse(4, "Java", 10, "AlexWalker"),
    )
  }

  getData(): Curse[] {
    return this.data;
  }

}
