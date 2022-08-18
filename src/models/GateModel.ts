import { PinModel } from "./PinModel";

/**
 *Base class for all logical gates
 *
 * @class Gate
 */
class GateModel {
  private input: PinModel[] = [];
  private output: PinModel;
  constructor() {
    this.input = [];
    this.output = new PinModel();
  }
  addInputPin() {
    this.input.push(new PinModel());
  }
  changePintStatus(index:number,value:boolean){
    if(index<this.input.length){
      this.input[index].setStatus(value);
      console.log(this.input);
    }
  }
  /**
   *This is test method
   *
   * @memberof Gate
   */
  test() {}
}
export { GateModel };
