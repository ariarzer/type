function validate(mode) {
  const possibleModesValues = [
    'all',
    'normal',
  ];

  let flag = true;

  possibleModesValues.forEach((item) => {
    if (item === mode) {
      flag = false;
    }
  });

  if (flag) {
    throw new Error('Wrong mode');
  }

  return 0;
}

module.exports = validate;
