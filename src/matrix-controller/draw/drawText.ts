import { Font, FontInstance, LedMatrixInstance } from 'rpi-led-matrix';
import { ColorsScreen } from '../../model/colors';
import { FontEnum } from '../../model/font';

export class DrawText {
  constructor(private matrix: LedMatrixInstance) {}

  setText(
    text: string,
    x: number,
    y: number,
    font: FontInstance,
    color: ColorsScreen,
  ) {
    this.matrix.font(font);
    this.matrix.fgColor(color);
    this.matrix.clear();
    this.matrix.drawText(text, x, y);
  }

  createFont(fontSize: FontEnum) {
    return new Font('font', `${process.cwd()}/fonts/${fontSize}`);
  }

  private checkTextSize(text: string) {
    // print text lenght
    console.log(`text length: ${text.length}`);
  }
}
