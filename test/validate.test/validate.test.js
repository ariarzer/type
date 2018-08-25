const validate = require('../../src/validate.js');

const casesWrong = [
  { value: 'abcd', errorMessage: 'Wrong mode' },
  { value: [], errorMessage: 'Wrong mode' },
  { value: {}, errorMessage: 'Wrong mode' },
];

casesWrong.forEach(({ value, errorMessage }) => {
  test(`for "${value}"`, () => {
    expect(() => validate(value)).toThrowError(errorMessage);
  });
});

const casesTrue = [
  { value: 'normal', result: 0 },
  { value: 'all', result: 0 },
];

casesTrue.forEach(({ value, result }) => {
  test(`for "${value}"`, () => {
    expect(validate(value)).toBe(result);
  });
});
