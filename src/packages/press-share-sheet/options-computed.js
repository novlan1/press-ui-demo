const PRESET_ICONS = ['qq', 'link', 'weibo', 'wechat', 'poster', 'qrcode', 'weapp-qrcode', 'wechat-moments'];

function getIconURL(icon) {
  if (PRESET_ICONS.indexOf(icon) !== -1) {
    return `https://img.yzcdn.cn/vant/share-sheet-${icon}.png`;
  }

  return icon;
}

module.exports = {
  getIconURL,
};
