import { Controller } from "@hotwired/stimulus";
import { EtchRetc } from "../etchRetc";

export default class extends Controller {
  static classes = [ 'pixel' ]

  initialize() {
    let screen = new EtchRetc(this.element)
    // TODO - write a slider to change the row count in the grid
    // Fix row count to a constant for now
    let rowCount = 30;
    let colCount = Math.round(rowCount * screen.rowToColRatio())
    this.setRowAndColCount(rowCount, colCount)

    for (let i=0; i < (rowCount * colCount); i++) {
      this.element.appendChild(this.pixelDiv())
    }
  }

  pixelDiv() {
    const etchPixel = document.createElement('div')
    etchPixel.classList.add(this.pixelClass)
    return etchPixel
  }

  setRowAndColCount(rowCount, colCount) {
    let root = document.querySelector(':root');
    root.style.setProperty('--rowCount', rowCount)
    root.style.setProperty('--colCount', colCount)
  }
}