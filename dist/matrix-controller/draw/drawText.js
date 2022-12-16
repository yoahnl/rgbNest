"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawText = void 0;
const rpi_led_matrix_1 = require("rpi-led-matrix");
class DrawText {
    constructor(matrix) {
        this.matrix = matrix;
    }
    setText(text, x, y, font, color) {
        this.matrix.font(font);
        this.matrix.fgColor(color);
        this.matrix.clear();
        this.checkTextSize(text);
        const textAr = this.checkTextSize(text);
        if (textAr.length > 4) {
            this.matrix.drawText('Text too long', x, y);
        }
        else {
            for (let i = 0; i < textAr.length; i++) {
                this.matrix.drawText(textAr[i], x, y);
                y += 7;
            }
        }
    }
    createFont(fontSize) {
        return new rpi_led_matrix_1.Font('font', `${process.cwd()}/fonts/${fontSize}`);
    }
    checkTextSize(text) {
        return text.match(/.{1,13}/g);
    }
}
exports.DrawText = DrawText;
//# sourceMappingURL=drawText.js.map