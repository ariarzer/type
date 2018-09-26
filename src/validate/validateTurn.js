function validate({ off, on }) {
  if (Array.isArray(off)) {
    throw new Error('off from turn in is not array!');
  }

  off.forEach((item) => {
    if (typeof item !== 'string') {
      throw new Error(`${item} from off in turn is not a string`);
    }
  });

  if (Array.isArray(on)) {
    throw new Error('on from turn is not array!');
  }

  on.forEach((item) => {
    if (typeof item !== 'string') {
      throw new Error(`${item} from on in turn is not a string`);
    }
  });

  return 0;
}

module.exports = validate;
