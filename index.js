const validate = require('./src/validate.js');

function type(mode, a) {
  validate(mode);

  if (a === null) return 'null';
  if (a === undefined) return 'undefined';

  const all = a.constructor.name.toLowerCase();
  const norm = Array.isArray(a) ? 'array' : typeof a;

  return mode === 'normal' ? norm : all;
}

module.exports = function wrapper(a) {
  return type('all', a);
};

module.exports.create = function create(mode) {
  return type.bind(this, mode);
};
