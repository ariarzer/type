const type = require('../../index.js');
const cases = require('../getTestCases.js')(true);

cases.forEach(({ name, value, result }) => {
  test(`for "${name}"`, () => {
    expect(type(value, true)).toBe(result);
  });
});
