import { FontInstance, LedMatrixInstance } from 'rpi-led-matrix';
import { ColorsScreen } from '../../model/colors';
import { FontEnum } from '../../model/font';
export declare class DrawText {
    private matrix;
    constructor(matrix: LedMatrixInstance);
    setText(text: string, x: number, y: number, font: FontInstance, color: ColorsScreen): void;
    createFont(fontSize: FontEnum): FontInstance;
    private checkTextSize;
}
