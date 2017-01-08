import { Component,Input } from "@angular/core";

@Component({
  selector: "tabOne",
  templateUrl: "mainTab/tabOne/tabOne.component.html"
})
export class TabOneComponent {

    @Input() data: string;

      constructor() {
       
    }
}