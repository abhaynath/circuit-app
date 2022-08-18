import { GateModel } from "./GateModel";

class AndModel extends GateModel {
  constructor() {
    super();
    this.addInputPin();
    this.addInputPin();
  }
  
}
export {AndModel}
