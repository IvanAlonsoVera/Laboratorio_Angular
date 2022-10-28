import { Component } from "@angular/core";
import { Model } from "./repository.model";

@Component({
  selector: "app",
  templateUrl: "template.html",
})

export class CurseComponent {
  model: Model = new Model();


}
