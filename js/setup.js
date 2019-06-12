'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var firstNamesRandom;
var lastNamesRandom;
var namesGenerator;
var colorRandom;
var eyesColorRandom;


/**
 *Функция создает массив объектов
 * @return {Array}
 */
var generateWizardsArray = function () {
  var wizards = [];
  for (var i = 0; i < 4; i++) {
    firstNamesRandom = Math.floor(Math.random() * FIRST_NAMES.length);
    lastNamesRandom = Math.floor(Math.random() * LAST_NAMES.length);
    namesGenerator = FIRST_NAMES[firstNamesRandom] + ' ' + LAST_NAMES[lastNamesRandom];
    colorRandom = WIZARDS_COLOR[Math.floor(Math.random() * WIZARDS_COLOR.length)];
    eyesColorRandom = EYES_COLOR[Math.floor(Math.random() * EYES_COLOR.length)];
    wizards.push({
      name: namesGenerator,
      coatColor: colorRandom,
      eyesColor: eyesColorRandom
    });
  }
  return wizards;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};


var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');

generateWizardsArray();
