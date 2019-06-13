'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var firstNamesRandom;
var lastNamesRandom;
var namesGenerator;
var colorRandom;
var eyesColorRandom;


/**
 * Функция создает массив волшебников, сгенерированных случайным образом
 * @param {string[]} firstNames Имя волшебника
 * @param {string[]} lastNames Фамилия волшебника
 * @param {string[]} coatColors цвет плаща волшебника
 * @param {string[]} eyesColors цвет глаз волшебника
 * @return {{
 *   name: string,
 *   coatColor: string,
 *   eyesColor: string
 * }[]} массив из волшебников.
 */
var generateWizardsArray = function (firstNames, lastNames, coatColors, eyesColors) {
  var wizards = [];
  for (var i = 0; i < 4; i++) {
    firstNamesRandom = Math.floor(Math.random() * firstNames.length);
    lastNamesRandom = Math.floor(Math.random() * lastNames.length);
    namesGenerator = firstNames[firstNamesRandom] + ' ' + lastNames[lastNamesRandom];
    colorRandom = coatColors[Math.floor(Math.random() * coatColors.length)];
    eyesColorRandom = eyesColors[Math.floor(Math.random() * eyesColors.length)];
    var wizard = {
      name: namesGenerator,
      coatColor: colorRandom,
      eyesColor: eyesColorRandom
    };
    wizards.push(wizard);
  }
  return wizards;
};

/**
 * Создает новый узел с дополнительными атрибутами
 * @param {{
 *   coatColor: string,
 *   eyesColor: string,
 *   name: string
 * }} wizard
 *
 * @return {Node}
 */
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};


var fragment = document.createDocumentFragment();
var wizards = generateWizardsArray(FIRST_NAMES, LAST_NAMES, WIZARDS_COLORS, EYES_COLORS);
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');
