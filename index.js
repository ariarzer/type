function type(a) {
  if (a === null) return 'null';
  if (a === undefined) return 'undefined';

  return Array.isArray(a) ? 'array' : typeof a;
}

module.exports = type;
