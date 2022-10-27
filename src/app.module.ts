import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MatrixControllerService } from './matrix-controller/matrix-controller.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, MatrixControllerService],
})
export class AppModule {


}
