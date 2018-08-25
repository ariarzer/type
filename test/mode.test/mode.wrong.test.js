const Type = require('../../index.js');

const type = Type.create('abcd');

const errorMessage = 'Wrong mode';

function MyObject() {
  this.prop = -1;
}

const cases = [
  undefined,
  null,
  '',
  1,
  NaN,
  true,
  {},
  [],
  Symbol('test'),
  new Map(),
  new Set(),
  new WeakMap(),
  new WeakSet(),
  new Date(),
  new MyObject(2),
  new Error(),
  new TypeError(),
  /a/,
  new Promise((resolve, reject) => {}),
  document.createElement('div'),
];

cases.forEach((item) => {
  test('for wrong mode', () => {
    expect(() => type(item)).toThrowError(errorMessage);
  });
});
