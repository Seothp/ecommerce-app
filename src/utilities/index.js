/* eslint-disable import/prefer-default-export */
/**
 *
 * @param {string} hex - color in HEX format
 * @returns {string} - string in format "RED, GREEN, BLUE"
 */
export function hexToRgb(hex) {
  return hex
    .slice(1)
    .match(/.{1,2}/g)
    .map((hexNum) => parseInt(hexNum, 16))
    .join(', ');
}
