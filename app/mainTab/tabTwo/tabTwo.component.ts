import { Component } from "@angular/core";

@Component({
  selector: "tabTwo",
  templateUrl: "mainTab/tabTwo/tabTwo.component.html"
})
export class TabTwoComponent {

  public tabTwoText:string = "Tab Two";
  public tapCount : number = 0;

      constructor() {
       
    }

    public onTap()
    {
      this.tapCount++;
      console.log('onTap'+ this.tapCount);
      this.tabTwoText = 'tab two tap count ' + this.tapCount;
    }
}