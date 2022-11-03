import { Component } from "@angular/core";
import { Model } from "./repository.model";
import { NgForm } from "@angular/forms";
import { Curse } from "../Curse/curse.model";

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
  selectedCurse: string | undefined;

  addCurse(p: Curse) {
    this.model.saveCurse(p);
  }
  newCurse: Curse = new Curse();

  getValidationMessages(state: any, thingName?: string) {
    let thing: string = state.path || thingName;
    let messages: string[] = [];
    if (state.errors) {
      for (let errorName in state.errors) {
        switch (errorName) {
          case "required":
            messages.push(`You must enter a ${thing}`);
            break;
          case "minlength":
            messages.push(`A ${thing} must be at least 
              ${state.errors["minlength"].requiredLength} characters`);
            break;
          case "pattern":
            messages.push(`The ${thing} contains illegal characters`);
            break;
        }
      }
    }
    return messages;
  }
  getFormValidationMessages(form: NgForm): string[] {
    let messages: string[] = [];
    Object.keys(form.controls).forEach(k => {
      this.getValidationMessages(form.controls[k], k).forEach(m => messages.push(m));
    });
    return messages;
  }

  formSubmitted: boolean = false;
  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {
      this.addCurse(this.newCurse);
      this.newCurse = new Curse();
      form.reset();
      this.formSubmitted = false;
    }
  }
}
