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
    throw new Error('Wrong mode! Possible mode is a `all` or `normal`');
  }

  return 0;
}

module.exports = validate;
