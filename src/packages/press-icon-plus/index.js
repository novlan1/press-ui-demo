const style = require('../wxs-js/style.js');
const addUnit = require('../wxs-js/add-unit.js');

function isImage(name) {
  return name.indexOf('/') !== -1;
}

function rootClass(data) {
  const classes = [data.customClass || ''];

  if (data.classPrefix != null) {
    classes.push(data.classPrefix);
  }

  if (isImage(data.name)) {
    classes.push('van-icon--image');
  } else if (data.classPrefix != null) {
    classes.push(`${data.classPrefix}-${data.name}`);
  }

  return classes.join(' ');
}

function rootStyle(data) {
  return style([
    {
      color: data.color,
      'font-size': addUnit(data.size),
    },
    data.customStyle,
  ]);
}

module.exports = {
  isImage,
  rootClass,
  rootStyle,
};
