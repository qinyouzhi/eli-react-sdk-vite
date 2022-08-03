/**
 * 根据传入秒数计算出时分秒
 * @param second 秒数
 * @param convertText 是否需要转换为文本，默认为true
 * @returns [时, 分, 秒]
 */
export const getSecondToTime = (
  second: number,
  convertText = true
): Array<number | string> | string => {
  let h: string | number = parseInt(`${(second / 60 / 60) % 24}`);
  h = h < 10 ? '0' + h : h;
  let m: string | number = parseInt(`${(second / 60) % 60}`);
  m = m < 10 ? '0' + m : m;
  let s: string | number = parseInt(`${second % 60}`);
  s = s < 10 ? '0' + s : s;

  const text = `${h > 0 ? h + '时' : ''}${m > 0 ? m + '分' : ''}${s > 0 ? s + '秒' : ''}`;

  return convertText ? text : [h, m, s];
};

/**
 * 把非数字的都替换掉，除了数字和.
 * 保证只有出现一个.而没有多个.
 * 保证第一个为数字而不是.
 * 保证.只出现一次，而不能出现两次以上
 * 只能输入两个小数
 * @param value 需要格式化的值
 * @returns 格式化后的值
 */
export const formatNumberDecimal = (value: string): string =>
  value
    .replace(/[^\d.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\./g, '')
    .replace('.', '$#$')
    .replace(/\./g, '')
    .replace('$#$', '.')
    .replace(/^(-)*(\d+)\.(\d\d).*$/, '$1$2.$3');

/**
 * 正则验证两位小数
 */
export const decimalReg: RegExp = /^(([0-9][0-9]*)|(([0]\.\d{0,2}|[1-9][0-9]*\.\d{0,2})))$/;

/**
 * 保留两位小数
 * @param value 值
 * @returns 返回保留两位小数的值
 */
export const computeDecimalValue = (value: string) =>
  Math.abs(parseFloat(parseFloat(value.trim()).toFixed(2)));

/**
 * 生成唯一ID
 * @returns 唯一ID
 */
export const uniqueId = () => {
  const s: any[] = [];
  const hexDigits = '0123456789abcdef';
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-';

  const uuid = s.join('');
  return uuid;
};

/**
 * 格式化分值
 * @param score 分数
 * @returns 计算后分数
 */
export const formatScore = (score: number) => {
  return Math.round(score * 100) / 100;
};
