
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_X = 140;
var BAR_Y = 80;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 50;
var BAR_GAP = 50;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function(ctx, text, x, y, font, color) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.fillText(text, x, y);
};

window.renderStatistics = function(ctx) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  renderText(ctx, 'Ура, вы победили', 130, 40, '16px PT Mono', '#000');
  renderText(ctx, 'Список результатов:', 130, 60);

  ctx.fillStyle = '#000';
  ctx.fillText('Вы', CLOUD_X + (GAP * 4) + (BAR_WIDTH + BAR_GAP) * 0, BAR_Y + BAR_HEIGHT + GAP * 2);
  ctx.fillRect(BAR_X + (BAR_WIDTH + BAR_GAP) * 0, BAR_Y, BAR_WIDTH, BAR_HEIGHT);

  ctx.fillText('Кекс', CLOUD_X + (GAP * 4) + (BAR_WIDTH + BAR_GAP) * 1, BAR_Y + BAR_HEIGHT + GAP * 2);
  ctx.fillRect(BAR_X + (BAR_WIDTH + BAR_GAP) * 1, BAR_Y, BAR_WIDTH, BAR_HEIGHT);

  ctx.fillText('Катя', CLOUD_X + (GAP * 4) + (BAR_WIDTH + BAR_GAP) * 2, BAR_Y + BAR_HEIGHT + GAP * 2);
  ctx.fillRect(BAR_X + (BAR_WIDTH + BAR_GAP) * 2, BAR_Y, BAR_WIDTH, BAR_HEIGHT);
};
