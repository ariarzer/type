const validateMode = require('./validateMode');
const validateTurn = require('./validateTurn');

function validate({ mode, turn }) {
  validateMode(mode);
  validateTurn(turn);
  return 0;
}

module.exports = validate;
