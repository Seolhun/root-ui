/**
 * @param {number} num
 * @returns {string}
 */
const round = (num) => {
  return num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '');
};

/**
 * @param {number} px
 * @returns {string}
 * The "document" and "body" is built by based on font-size "16"
 */
const rem = (px) => `${round(px / 16)}rem`;

/**
 * @param {number} px
 * @param {number} base
 * @returns {string}
 */
const em = (px, base) => `${round(px / base)}em`;

module.exports = {
  round,
  rem,
  em,
};
