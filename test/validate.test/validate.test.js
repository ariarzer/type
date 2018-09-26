const validate = require('../../src/validate/validate.js');

const errMode = 'Wrong mode! Possible mode is a `all` or `normal`';

const casesWrong = [
  { value: 'abcd', errorMessage: errMode},
  { value: [], errorMessage: errMode },
  { value: {}, errorMessage: errMode },
];

casesWrong.forEach(({ value, errorMessage }) => {
  test(`for "${value}"`, () => {
    expect(() => validate({ mode: value })).toThrowError(errorMessage);
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
