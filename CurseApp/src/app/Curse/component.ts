import { Component } from "@angular/core";
import { Model } from "./repository.model";

@Component({
  selector: "app",
  templateUrl: "template.html",
})

export class CurseComponent {
  model: Model = new Model();

  getCurses(): any {
    let curse = this.model.getCurses();
    return (curse);
  }

  getClasses(key: number): string {
      if (this.model.getCurse(key).seatCapacity <= 17) {
        return "bg-warning"
      } else {
        return "bg-success"
      }
  } 

}
