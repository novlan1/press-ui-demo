const COMP_TITLE_MAP = {
  Button: {
    title: '按钮',
  },
  Cell: {
    title: '单元格',
  },
  Divider: {
    title: '分割线',
  },
  Icon: {
    title: '图标',
  },
  Popup: {
    title: '弹出层',
  },
  PopupPlus: {
    title: '弹出层',
  },
  Toast: {
    title: '轻提示',
  },
  Transition: {
    title: '动画',
  },
  Checkbox: {
    title: '复选框',
  },
  DatetimePicker: {
    title: '时间选择',
  },
  Picker: {
    title: '选择器',
  },
  PickerPlus: {
    title: '选择器',
  },
  Switch: {
    title: '切换',
  },
  Dialog: {
    title: '弹出框',
  },
  Loading: {
    title: '加载中',
  },
  LoadingPlus: {
    title: '加载中',
  },
  Overlay: {
    title: '遮罩层',
  },
  SwipeCell: {
    title: '滑动单元格',
  },
  Empty: {
    title: '空状态',
  },
  Sticky: {
    title: '粘性布局',
  },
  Tab: {
    title: '标签页',
  },
  Tag: {
    title: '标签',
  },
  MessageList: {
    title: '消息列表',
  },
  MessageDetail: {
    title: '消息详情',
  },
  NoticeBar: {
    title: '通知栏',
  },
  NavBar: {
    title: '导航栏',
  },
  Area: {
    title: '省市区选择',
  },
  Circle: {
    title: '环形进度条',
  },
  Collapse: {
    title: '折叠面板',
  },
  Steps: {
    title: '步骤条',
  },
  ActionSheet: {
    title: '动作面板',
  },
  ShareSheet: {
    title: '分享面板',
  },
  Notify: {
    title: '消息提示',
  },
};

const COMP_TYPE_MAP = {
  base: {
    title: '基础组件',
    list: [
      'Button',
      'Cell',
      'Icon',
      // 'Image',
      'Popup',
      'PopupPlus',
      'Toast',
      'Transition',
    ],
  },
  form: {
    title: '表单组件',
    list: [
      'Checkbox',
      'DatetimePicker',
      'Picker',
      'PickerPlus',
      'Switch',
    ],
  },
  feedback: {
    title: '反馈组件',
    list: [
      'ActionSheet',
      'Dialog',
      'Loading',
      'LoadingPlus',
      'Notify',
      'Overlay',
      'ShareSheet',
      'SwipeCell',
    ],
  },
  show: {
    title: '展示组件',
    list: [
      'Circle',
      'Collapse',
      'Divider',
      'Empty',
      'NoticeBar',
      'Steps',
      'Sticky',
      'Tag',
    ],
  },
  nav: {
    title: '导航组件',
    list: [
      'NavBar',
      'Tab',
    ],
  },
  work: {
    title: '业务组件',
    list: [
      'Area',
      'MessageDetail',
      'MessageList',
    ],
  },
};


module.exports = {
  COMP_TYPE_MAP,
  COMP_TITLE_MAP,
};
