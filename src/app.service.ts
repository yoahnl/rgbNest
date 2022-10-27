import { Injectable } from '@nestjs/common';
import { MatrixControllerService } from './matrix-controller/matrix-controller.service';

@Injectable()
export class AppService {
  constructor(private matrixControllerService: MatrixControllerService) {
    console.log('AppService constructor');
  }

  getHello(): string {
    console.log(`matrixControllerService.test: ${this.matrixControllerService.test}`);
    this.matrixControllerService.test += 1;
    console.log(`matrixControllerService.test: ${this.matrixControllerService.test}`);

    return `test: ${this.matrixControllerService.test}`;
  }
}
