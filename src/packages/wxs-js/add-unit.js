
// var REGEXP = getRegExp('^-?\d+(\.\d+)?$');
const REGEXP = /^-?\d+(\.\d+)?$/;

function addUnit(value) {
  if (value == null) {
    return undefined;
  }
  console.log('test', REGEXP.test(`${value}`));
  console.log('REGEXP', REGEXP);
  return REGEXP.test(`${value}`) ? `${value}px` : value;
}

module.exports = addUnit;
