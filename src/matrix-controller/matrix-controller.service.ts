import { Injectable, Scope } from '@nestjs/common';
import { matrixOptions, runtimeOptions } from './_config';
import { FontInstance, LedMatrix } from 'rpi-led-matrix';
import { DrawText } from './draw/drawText';
import { ColorsScreen } from '../model/colors';
import { FontEnum } from '../model/font';
import { DrawImage } from './draw/drawImage';

@Injectable({ scope: Scope.DEFAULT })
export class MatrixControllerService {
  test = 0;
  smallFont: FontInstance;
  tiny: FontInstance;
  public drawImage;
  private matrix!: any;
  private text: DrawText;

  constructor() {
    const test = true;
    if (test == true) {
      this.matrix = new LedMatrix(matrixOptions, runtimeOptions);
      this.initDrawText();
    } else {
      this.matrix = null;
    }
  }

  public drawTest() {
    this.matrix
      .clear() // clear the display
      .brightness(100) // set the panel brightness to 100%
      .fgColor(0x0000ff) // set the active color to blue
      .fill() // color the entire diplay blue
      .fgColor(0xffff00) // set the active color to yellow
      // draw a yellow circle around the display
      .drawCircle(
        this.matrix.width() / 2,
        this.matrix.height() / 2,
        this.matrix.width() / 2 - 1,
      )
      // draw a yellow rectangle
      .drawRect(
        this.matrix.width() / 4,
        this.matrix.height() / 4,
        this.matrix.width() / 2,
        this.matrix.height() / 2,
      )
      // sets the active color to red
      .fgColor({ r: 255, g: 0, b: 0 })
      // draw two diagonal red lines connecting the corners
      .drawLine(0, 0, this.matrix.width(), this.matrix.height())
      .drawLine(this.matrix.width() - 1, 0, 0, this.matrix.height() - 1)
      .sync();
  }

  public drawText(text: string) {
    this.text.setText(text, 0, 0, this.tiny, ColorsScreen.white);
    this.matrix.sync();
  }

  public clear() {
    this.matrix.clear().sync();
  }

  drawImageTest() {
    this.drawImage = new DrawImage('logo.png', this.matrix, 32, 32);
    this.drawImage.drawImage();
  }

  private initDrawText() {
    this.text = new DrawText(this.matrix);
    this.smallFont = this.text.createFont(FontEnum.smallBold);
    this.tiny = this.text.createFont(FontEnum.tiny);
  }
}
