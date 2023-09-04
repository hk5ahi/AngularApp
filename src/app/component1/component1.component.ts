import { Component } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component {

  firstName: string = "Hanan";
  age: number = 16;
  check: boolean = true;
  changeName() {
    if(this.check) {
      this.firstName = "Muhammad";
      this.check = false;
    } else {
      this.firstName = "Hanan";
      this.check = true;
    }
  }
}
