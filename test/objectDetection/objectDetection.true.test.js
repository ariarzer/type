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
  { name: 'map', value: new Map() },
  { name: 'set', value: new Set() },
  { name: 'weakmap', value: new WeakMap() },
  { name: 'weakset', value: new WeakSet() },
  { name: 'date', value: new Date() },
  { name: 'myobject', value: new MyObject(2) },
  { name: 'error', value: new Error() },
  { name: 'typeerror', value: new TypeError() },
  { name: 'regexp', value: /a/ },
  { name: 'promise', value: new Promise(function (resolve, reject) {}) },
  { name: 'htmldivelement', value: document.createElement('div') },
];

cases.forEach(({ name, value }) => {
  test(`for "${name}"`, () => {
    expect(type(value, true)).toBe(name);
  });
});
