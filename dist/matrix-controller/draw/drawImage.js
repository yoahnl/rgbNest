"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawImage = void 0;
const fs = require("fs");
const png = require("@vivaxy/png");
const resizeImg = require('resize-image-buffer');
class DrawImage {
    constructor(imagePath, matrix, width, height) {
        this.imagePath = imagePath;
        this.matrix = matrix;
        this.width = width;
        this.height = height;
        this.imageBuf = new Uint8Array(0);
        this.completeImagePath = `${process.cwd()}/images/${this.imagePath}`;
    }
    drawImage() {
        this.getImage().then((image) => {
            const test = this.matrix.drawBuffer(image, this.width, this.height);
            console.log(test);
            this.matrix.sync();
        });
    }
    async getImage() {
        const image = await resizeImg(fs.readFileSync(this.completeImagePath), {
            width: this.width,
            height: this.height,
        });
        const metadata = png.decode(image);
        this.imageBuf = new Uint8Array(this.removeWhiteInformationFromMetaData(metadata.data));
        return this.imageBuf;
    }
    removeWhiteInformationFromMetaData(metadata) {
        let inew = 0;
        let iold = 0;
        let count = 0;
        const newMetaData = [];
        while (iold < metadata.length) {
            if (count < 3) {
                newMetaData[inew] = metadata[iold];
                inew += 1;
                count += 1;
            }
            else if (count == 3) {
                count = 0;
            }
            iold += 1;
        }
        return newMetaData;
    }
}
exports.DrawImage = DrawImage;
//# sourceMappingURL=drawImage.js.map