import { MatrixControllerService } from './matrix-controller/matrix-controller.service';
export declare class AppService {
    private matrixControllerService;
    constructor(matrixControllerService: MatrixControllerService);
    getHello(): string;
}
