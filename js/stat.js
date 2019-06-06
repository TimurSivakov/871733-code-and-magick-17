'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_X = 140;
var BAR_Y = 85;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
/**
 * Функция выводит на экран облако
 * @param {object} ctx
 * @param {number} x
 * @param {number} y
 * @param {string}  color
 */
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
/**
 * Функция выводит на экран текст поздравления
 * @param {object} ctx
 * @param {string} text
 * @param {number} x
 * @param {number} y
 * @param {string} font
 * @param {string} color
 */
var renderText = function (ctx, text, x, y, font, color) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.fillText(text, x, y);
};

/**
 *Функция определяет максимальный элемент в массиве
 * @param {array} arr
 * @return {number} максимальный элемент
 */

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

/**
 * Функция выводит статистику на экран при победе
 * @param {object} ctx
 * @param {array} names
 * @param {array} times
 */

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  renderText(ctx, 'Ура, вы победили!', 130, 40, '16px PT Mono', '#000');
  renderText(ctx, 'Список результатов:', 130, 60, '16px PT Mono', '#000');


  var maxTime = getMaxElement(times);


  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + (GAP * 4) + (BAR_WIDTH + BAR_GAP) * i, BAR_Y + BAR_HEIGHT + GAP * 3);
    ctx.fillText(Math.round(times[i]), CLOUD_X + (GAP * 4) + (BAR_WIDTH + BAR_GAP) * i, BAR_Y);


    if (names[i] === 'Вы') {
      var barColor = 'rgba(255, 0, 0, 1)';
    } else {
      var getRandomSaturation = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      };
      barColor = 'hsl(' + 240 + ',' + getRandomSaturation(0, 101) + '%,' + 50 + '%)';
    }
    ctx.fillStyle = barColor;
    ctx.fillRect(BAR_X + (BAR_WIDTH + BAR_GAP) * i, BAR_Y + GAP + BAR_HEIGHT - (BAR_HEIGHT * times[i] / maxTime), BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime);
  }
};
