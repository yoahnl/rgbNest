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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const matrix_controller_service_1 = require("./matrix-controller/matrix-controller.service");
let AppController = class AppController {
    constructor(appService, matrixController) {
        this.appService = appService;
        this.matrixController = matrixController;
        this.matrixController.clear();
    }
    getHello() {
        return this.appService.getHello();
    }
    getTest() {
        this.matrixController.test += 1;
        return this.matrixController.test.toString();
    }
    getDrawTest() {
        this.matrixController.drawTest();
        return 'drawTest';
    }
    getClear() {
        this.matrixController.clear();
        return 'clear';
    }
    getDrawText(body) {
        this.matrixController.drawText(body.text);
        return `Created a new post with values of ${JSON.stringify(body)} 🚀`;
    }
    getDrawImageTest(body) {
        this.matrixController.drawImageTest();
        return `Created a new post with values of ${JSON.stringify(body)} 🚀`;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getTest", null);
__decorate([
    (0, common_1.Get)('drawTest'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getDrawTest", null);
__decorate([
    (0, common_1.Get)('clear'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getClear", null);
__decorate([
    (0, common_1.Post)('drawText'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "getDrawText", null);
__decorate([
    (0, common_1.Post)('drawImagetest'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "getDrawImageTest", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService,
        matrix_controller_service_1.MatrixControllerService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map