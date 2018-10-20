function type(a, objectDetector = false) {
  if (a === null) return 'null';
  if (a === undefined) return 'undefined';

  if (objectDetector) {
    return a.constructor.name.toLowerCase();
  }
  return Array.isArray(a) ? 'array' : typeof a;
}

module.exports = type;
