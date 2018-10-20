const type = require('../../index.js');
const cases = require('../getTestCases.js')(false);

cases.forEach(({ name, value, result }) => {
  test(`for "${name}"`, () => {
    expect(type(value, false)).toBe(result);
  });
});
