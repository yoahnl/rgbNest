"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runtimeOptions = exports.matrixOptions = void 0;
const rpi_led_matrix_1 = require("rpi-led-matrix");
exports.matrixOptions = Object.assign(Object.assign({}, rpi_led_matrix_1.LedMatrix.defaultMatrixOptions()), { rows: 32, cols: 64, brightness: 50, chainLength: 1, hardwareMapping: rpi_led_matrix_1.GpioMapping.AdafruitHat, parallel: 1 });
exports.runtimeOptions = Object.assign(Object.assign({}, rpi_led_matrix_1.LedMatrix.defaultRuntimeOptions()), { gpioSlowdown: 0 });
//# sourceMappingURL=_config.js.map