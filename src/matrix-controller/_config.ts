import {
  GpioMapping,
  LedMatrix,
  MatrixOptions,
  RuntimeOptions,
} from 'rpi-led-matrix';

export const matrixOptions: MatrixOptions = {
  ...LedMatrix.defaultMatrixOptions(),
  rows: 32,
  cols: 64,
  brightness: 50,
  chainLength: 1,
  hardwareMapping: GpioMapping.AdafruitHat,
  parallel: 1,
};

export const runtimeOptions: RuntimeOptions = {
  ...LedMatrix.defaultRuntimeOptions(),
  gpioSlowdown: 0,
};
