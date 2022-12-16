import { FontInstance } from 'rpi-led-matrix';
export declare class MatrixControllerService {
    test: number;
    smallFont: FontInstance;
    tiny: FontInstance;
    drawImage: any;
    private matrix;
    private text;
    constructor();
    drawTest(): void;
    drawText(text: string): void;
    clear(): void;
    drawImageTest(): void;
    private initDrawText;
}
