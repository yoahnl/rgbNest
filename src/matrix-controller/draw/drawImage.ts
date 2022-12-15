import { Buffer } from 'buffer';
import fs from 'fs';
import { LedMatrixInstance } from 'rpi-led-matrix';
import Metadata from '@vivaxy/png/lib/helpers/metadata';
import { resizeImg } from 'resize-image-buffer';
import * as png from '@vivaxy/png';

export class DrawImage {
  private imageBuf: Uint8Array = new Uint8Array(0);
  private completeImagePath = `${process.cwd()}/${this.imagePath}`;

  constructor(
    private imagePath: string,
    private matrix: LedMatrixInstance,
    private width: number,
    private height: number,
  ) {}

  async getImage() {
    const image: Buffer = await resizeImg(
      fs.readFileSync(this.completeImagePath),
      {
        width: this.width,
        height: this.height,
      },
    );
    const metadata: Metadata = png.decode(image);
    this.imageBuf = new Uint8Array(
      this.removeWhiteInformationFromMetaData(metadata.data),
    );
    return this.imageBuf;
  }

  private removeWhiteInformationFromMetaData(metadata: number[]) {
    let inew = 0;
    let iold = 0;
    let count = 0;
    const newMetaData: number[] = [];
    while (iold < metadata.length) {
      if (count < 3) {
        newMetaData[inew] = metadata[iold];
        inew += 1;
        count += 1;
      } else if (count == 3) {
        count = 0;
      }
      iold += 1;
    }
    return newMetaData;
  }
}
