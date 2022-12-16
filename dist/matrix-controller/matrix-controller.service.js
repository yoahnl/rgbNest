"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatrixControllerService = void 0;
const common_1 = require("@nestjs/common");
const _config_1 = require("./_config");
const rpi_led_matrix_1 = require("rpi-led-matrix");
const drawText_1 = require("./draw/drawText");
const colors_1 = require("../model/colors");
const font_1 = require("../model/font");
const drawImage_1 = require("./draw/drawImage");
let MatrixControllerService = class MatrixControllerService {
    constructor() {
        this.test = 0;
        const test = true;
        if (test == true) {
            this.matrix = new rpi_led_matrix_1.LedMatrix(_config_1.matrixOptions, _config_1.runtimeOptions);
            this.initDrawText();
        }
        else {
            this.matrix = null;
        }
    }
    drawTest() {
        this.matrix
            .clear()
            .brightness(100)
            .fgColor(0x0000ff)
            .fill()
            .fgColor(0xffff00)
            .drawCircle(this.matrix.width() / 2, this.matrix.height() / 2, this.matrix.width() / 2 - 1)
            .drawRect(this.matrix.width() / 4, this.matrix.height() / 4, this.matrix.width() / 2, this.matrix.height() / 2)
            .fgColor({ r: 255, g: 0, b: 0 })
            .drawLine(0, 0, this.matrix.width(), this.matrix.height())
            .drawLine(this.matrix.width() - 1, 0, 0, this.matrix.height() - 1)
            .sync();
    }
    drawText(text) {
        this.text.setText(text, 0, 0, this.tiny, colors_1.ColorsScreen.white);
        this.matrix.sync();
    }
    clear() {
        this.matrix.clear().sync();
    }
    drawImageTest() {
        this.drawImage = new drawImage_1.DrawImage('pixel.png', this.matrix, 32, 32);
        this.drawImage.drawImage();
    }
    initDrawText() {
        this.text = new drawText_1.DrawText(this.matrix);
        this.smallFont = this.text.createFont(font_1.FontEnum.smallBold);
        this.tiny = this.text.createFont(font_1.FontEnum.tiny);
    }
};
MatrixControllerService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.DEFAULT }),
    __metadata("design:paramtypes", [])
], MatrixControllerService);
exports.MatrixControllerService = MatrixControllerService;
//# sourceMappingURL=matrix-controller.service.js.map