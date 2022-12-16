import { AppService } from './app.service';
import { MatrixControllerService } from './matrix-controller/matrix-controller.service';
export declare class AppController {
    private readonly appService;
    private matrixController;
    constructor(appService: AppService, matrixController: MatrixControllerService);
    getHello(): string;
    getTest(): string;
    getDrawTest(): string;
    getClear(): string;
    getDrawText(body: any): string;
    getDrawImageTest(body: any): string;
}
