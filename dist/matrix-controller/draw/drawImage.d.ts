import { LedMatrixInstance } from 'rpi-led-matrix';
export declare class DrawImage {
    private imagePath;
    private matrix;
    private width;
    private height;
    private imageBuf;
    private completeImagePath;
    constructor(imagePath: string, matrix: LedMatrixInstance, width: number, height: number);
    drawImage(): void;
    private getImage;
    private removeWhiteInformationFromMetaData;
}
