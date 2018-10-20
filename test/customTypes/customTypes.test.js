const type = require('../../index.js');
const cases = require('../getTestCases.js')();

const week =  ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

const customTypes = week.map((item, index) => {
  return {
    name: item,
    is: function (arg) {
      return type(arg, true) === 'date' && arg.getDay() === index;
    },
  };
});

const days = type.create(customTypes);

cases.concat(week.map((item, index) => {
  return {
    name: item,
    value: new Date(2018, 9, 14 + index),
    result: item,
  };
})).forEach(({ name, value, result }) => {
  if (name !== 'date') {
    test(`for "${name}"`, () => {
      expect(days(value)).toBe(result);
    });
  }
});
