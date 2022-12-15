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
    this.checkTextSize(text);
    const textAr: string[] = this.checkTextSize(text);
    if (textAr.length > 2) {
      this.matrix.drawText('Text too long', x, y);
      throw new Error('Text is too long');
    }
    for (let i = 0; i < textAr.length; i++) {
      this.matrix.drawText(textAr[i], x, y + i * 10);
    }
  }

  createFont(fontSize: FontEnum) {
    return new Font('font', `${process.cwd()}/fonts/${fontSize}`);
  }

  private checkTextSize(text: string): string[] {
    return text.match(/.{1,13}/g);
  }
}
