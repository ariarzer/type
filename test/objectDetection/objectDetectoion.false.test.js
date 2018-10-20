const type = require('../../index.js');

function MyObject() {
  this.prop = -1;
}

const cases = [
  { name: 'undefined', value: undefined },
  { name: 'null', value: null },
  { name: 'string', value: '' },
  { name: 'number', value: 1 },
  { name: 'number', value: NaN },
  { name: 'boolean', value: true },
  { name: 'object', value: {} },
  { name: 'array', value: [] },
  { name: 'symbol', value: Symbol('test') },
  { name: 'object', value: new Map() },
  { name: 'object', value: new Set() },
  { name: 'object', value: new WeakMap() },
  { name: 'object', value: new WeakSet() },
  { name: 'object', value: new Date() },
  { name: 'object', value: new MyObject(2) },
  { name: 'object', value: new Error() },
  { name: 'object', value: new TypeError() },
  { name: 'object', value: /a/ },
  { name: 'object', value: new Promise(function(resolve, reject) {}) },
  { name: 'object', value: document.createElement('div') },
];

cases.forEach(({ name, value }) => {
  test.skip(`for "${name}"`, () => {
    expect(type(value, false)).toBe(name);
  });
});
