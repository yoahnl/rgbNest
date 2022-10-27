import {
  Font,
  FontInstance,
  HorizontalAlignment,
  LayoutUtils,
  LedMatrixInstance,
  VerticalAlignment,
} from 'rpi-led-matrix';
import { ColorsScreen } from '../../model/colors';
import { FontEnum } from "../../model/font";

export class DrawText
{

  constructor(
    private matrix: LedMatrixInstance) {}

  setText(text: string, x: number, y: number, font: FontInstance, color: ColorsScreen)
  {
    this.matrix.font(font);
    this.matrix.fgColor(color);
    this.matrix.drawText(text, x, y);
  }

  createFont(fontSize: FontEnum)
  {
    return new Font('font', `${process.cwd()}/fonts/${fontSize}`);
  }
}
