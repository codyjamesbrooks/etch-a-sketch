import { Controller } from "@hotwired/stimulus";
import { EtchRetc } from "../etchRetc";

export default class extends Controller {
  static classes = [ 'highlight' ]

  initialize() {
    let screen = new EtchRetc(this.element)
    // TODO - write a slider to change the row count in the grid
    // Fix row count to a constant for now
    let rowCount = 35;
    let colCount = Math.round(rowCount * screen.rowToColRatio());
    this.setRowAndColCount(rowCount, colCount);

    for (let i=0; i < (rowCount * colCount); i++) {
      this.element.appendChild(this.pixel());
    }
  }

  setRowAndColCount(rowCount, colCount) {
    let root = document.querySelector(':root');
    root.style.setProperty('--rowCount', rowCount);
    root.style.setProperty('--colCount', colCount);
  }

  pixel() {
    const etchPixel = document.createElement('div');
    etchPixel.classList.add(this.highlightClass)
    return etchPixel;
  }
}