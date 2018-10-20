function type(customTypes, a, objectDetector = false) {
  if (a === null) return 'null';
  if (a === undefined) return 'undefined';

  if (customTypes.some(item => item.is(a))) {
    return customTypes.reduce((ac, { is, name }) => (is(a) ? name : ac), '');
  }

  if (objectDetector) {
    return a.constructor.name.toLowerCase();
  }
  return Array.isArray(a) ? 'array' : typeof a;
}

module.exports = function wrapper(a, objectDetection) {
  return type([], a, objectDetection);
};

module.exports.create = function create(customTypes) {
  return type.bind(this, customTypes);
};
