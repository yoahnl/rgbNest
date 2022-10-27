import { Injectable, Scope } from '@nestjs/common';
import { LedMatrix } from 'rpi-led-matrix';
import { matrixOptions, runtimeOptions } from './_config';

@Injectable({ scope: Scope.DEFAULT })
export class MatrixControllerService {
  test = 0;
  matrix = new LedMatrix(matrixOptions, runtimeOptions);

  constructor() {
    console.log('MatrixControllerService constructor');
  }
}
