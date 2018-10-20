function MyObject() {
  this.prop = -1;
}

const cases = [
  {
    name: 'undefined',
    value: undefined,
    objectDetection_false: 'undefined',
    objectDetection_true: 'undefined',
  },
  {
    name: 'null',
    value: null,
    objectDetection_false: 'null',
    objectDetection_true: 'null',
  },
  {
    name: 'string',
    value: '',
    objectDetection_false: 'string',
    objectDetection_true: 'string',
  },
  {
    name: 'number',
    value: 1,
    objectDetection_false: 'number',
    objectDetection_true: 'number',
  },
  {
    name: 'number',
    value: NaN,
    objectDetection_false: 'number',
    objectDetection_true: 'number',
  },
  {
    name: 'boolean',
    value: true,
    objectDetection_false: 'boolean',
    objectDetection_true: 'boolean',
  },
  {
    name: 'object',
    value: {},
    objectDetection_false: 'object',
    objectDetection_true: 'object',
  },
  {
    name: 'array',
    value: [],
    objectDetection_false: 'array',
    objectDetection_true: 'array',
  },
  {
    name: 'symbol',
    value: Symbol('test'),
    objectDetection_false: 'symbol',
    objectDetection_true: 'symbol',
  },
  {
    name: 'map',
    value: new Map(),
    objectDetection_false: 'object',
    objectDetection_true: 'map',
  },
  {
    name: 'set',
    value: new Set(),
    objectDetection_false: 'object',
    objectDetection_true: 'set',
  },
  {
    name: 'weakmap',
    value: new WeakMap(),
    objectDetection_false: 'object',
    objectDetection_true: 'weakmap',
  },
  {
    name: 'weakset',
    value: new WeakSet(),
    objectDetection_false: 'object',
    objectDetection_true: 'weakset',
  },
  {
    name: 'date',
    value: new Date(),
    objectDetection_false: 'object',
    objectDetection_true: 'date',
  },
  {
    name: 'myobject',
    value: new MyObject(),
    objectDetection_false: 'object',
    objectDetection_true: 'myobject',
  },
  {
    name: 'error',
    value: new Error(),
    objectDetection_false: 'object',
    objectDetection_true: 'error',
  },
  {
    name: 'typeerror',
    value: new TypeError(),
    objectDetection_false: 'object',
    objectDetection_true: 'typeerror',
  },
  {
    name: 'regexp',
    value: /a/,
    objectDetection_false: 'object',
    objectDetection_true: 'regexp',
  },
  {
    name: 'promise',
    value: new Promise((resolve, reject) => {}),
    objectDetection_false: 'object',
    objectDetection_true: 'promise',
  },
  {
    name: 'htmldivelement',
    value: document.createElement('div'),
    objectDetection_false: 'object',
    objectDetection_true: 'htmldivelement',
  },
];

module.exports = function (mode) {
  return cases.map(({ name, value, ...modes }) => {
    return mode ? { name, value, result: modes.objectDetection_true } : { name, value, result: modes.objectDetection_false };
  });
};
