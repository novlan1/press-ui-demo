import { IChatSDK } from '../types';
import { TIM } from './tim';

const timMap = {};

export function init(appId) {
  if (timMap[appId]) return timMap[appId];
  const options = {
    SDKAppID: appId,
  };

  const tim: IChatSDK = TIM.create(options);
  timMap[appId] = tim;

  // 设置 SDK 日志输出级别，详细分级请参见 setLogLevel https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#setLogLevel 接口的说明</a>
  tim.setLogLevel(0); // 普通级别，日志量较多，接入时建议使用
  // tim.setLogLevel(1); // release 级别，SDK 输出关键信息，生产环境时建议使用

  tim.on(TIM.EVENT.SDK_READY, () => {
    tim.isReady = true;
  });

  return tim;
}
