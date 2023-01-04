import Vue from 'vue';
import localeEn from 'src/packages/locale/lang/en-US';
import locale, { t } from 'src/packages/locale';

import localeEnDemo from './lang/en-US';
import localeZhDemo from './lang/zh-CN';
import { isInIFrame } from '../index';

import { LOCALE_STORAGE_KEY, DEFAULT_LOCALE_NUMBER, LOCALE_NUMBER_MAP } from './config';

const DEFAULT_LANG = 'zh-CN';

const LOCALE_MAP = {
  'en-US': localeEn,
};
const LOCALE_DEMO_AMP = {
  'en-US': localeEnDemo,
  'zh-CN': localeZhDemo,
};

let curLang = DEFAULT_LANG;
if (LOCALE_MAP[curLang]) {
  locale.use(LOCALE_MAP[curLang]);
}
if (LOCALE_DEMO_AMP[curLang]) {
  locale.add(LOCALE_DEMO_AMP[curLang]);
}

function getLocaleFromLocation() {
  const { href } = window.location;
  if (href.indexOf('?') <= -1) return;
  const search = href.split('?')[1];
  const map = search.split('&').reduce((acc, value) => {
    const temp = value.split('=');
    acc[temp[0]] = temp[1];
    return acc;
  }, {});

  console.log('map', map);

  return map.locale || map.lang;
}


function getLocale() {
  // #ifdef H5
  if (isInIFrame()) {
    return getLocaleFromLocation();
  }
  // #endif

  const locale = uni.getStorageSync(LOCALE_STORAGE_KEY);
  console.log('locale', locale);
  return LOCALE_NUMBER_MAP[locale || DEFAULT_LOCALE_NUMBER];
}

let set = false;

export function setLang() {
  if (set) return ;
  set = true;
  curLang = getLocale() || DEFAULT_LANG;
  console.log('curLang', curLang);

  if (LOCALE_MAP[curLang]) {
    locale.use(LOCALE_MAP[curLang]);
  }
  if (LOCALE_DEMO_AMP[curLang]) {
    locale.add(LOCALE_DEMO_AMP[curLang]);
  }
}

function getPage() {
  const pages = getCurrentPages();
  const path = pages[pages.length - 1].route;

  // const { path } = this.$route;
  const list = path.split('/');
  const name = list[list.length - 1];

  return name;
}

export function demoI18n() {
  Vue.mixin({
    onReady() {
      const name = getPage();
      if (!name) return;

      const newTitle = this.t(`titleMap.${name}`);
      if (!newTitle) return;

      uni.setNavigationBarTitle({
        title: newTitle,
      });
    },
    methods: {
      t(key, ...args) {
        const { i18n } = this.$options;
        if (i18n && i18n[curLang] && i18n[curLang][key]) {
          const value = i18n[curLang][key];
          if (typeof value === 'function') {
            return value(...args);
          }
          return value;
        }
        return t(key, ...args);
      },
    },
  });
}


