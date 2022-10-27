import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MatrixControllerService } from './matrix-controller/matrix-controller.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private matrixController: MatrixControllerService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  getTest(): string {
    this.matrixController.test += 1;
    return this.matrixController.test.toString();
  }

  @Get('drawTest')
  getDrawTest(): string {
    this.matrixController.drawTest();
    return 'drawTest';
  }

  @Get('clear')
  getClear(): string {
    this.matrixController.clear();
    return 'clear';
  }
}
