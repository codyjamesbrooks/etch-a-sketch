export class EtchRetc {
  constructor(etchRetcElement) {
    this.retc = etchRetcElement;
    this.bound = etchRetcElement.getBoundingClientRect();
    this.height = this.calculateHeight()
    this.width = this.calculateWidth()
  }

  calculateHeight() {
    return this.bound.bottom - this.bound.top;
  }

  calculateWidth() {
    return this.bound.right - this.bound.left;
  }

  rowToColRatio() {
    return this.width / this.height;
  }

}