import { Common } from "../helpers/common";

class PinModel {
  private id: string = "";
  private status: boolean = false;
  constructor() {
    this.id = Common.getRandomId();
  }
  setStatus(value){
    this.status = value;
  }
}
export { PinModel };
