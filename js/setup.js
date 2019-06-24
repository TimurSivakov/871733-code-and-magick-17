'use strict';

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setup = document.querySelector('.setup');
var setupOpenButton = document.querySelector('.setup-open');
var setupCloseButton = setup.querySelector('.setup-close');
var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_ARRAY_LENGTH = 4;
var SETUP = '.setup';
var SETUP_SIMILAR = '.setup-similar';

/**
 * Функция удаляет у элемента класс .hidden
 * @param {string} className
 * @return {void} возвращает элемент без класса .hidden
 */
var setupFunction = function (className) {
  return document.querySelector(className).classList.remove('hidden');
};

/**
 * @typedef {{
 *   coatColor: string,
 *   eyesColor: string,
 *   name: string
 * }} Wizard
 */

/**
 * Функция создает массив волшебников, сгенерированных случайным образом
 * @param {string[]} firstNames массив имен волшебника
 * @param {string[]} lastNames массив фамилий волшебника
 * @param {string[]} coatColors массив цветов плаща волшебника
 * @param {string[]} eyesColors массив цветов глаз волшебника
 * @return {Wizard[]} массив из волшебников.
 */
var generateWizardsArray = function (firstNames, lastNames, coatColors, eyesColors) {
  /**
   * Функция возвращает рандомный элемент из массива характеристик волшебника
   * @param {string[]} wizardsParameters
   * @return {string} возвращает элемент массива
   */
  var getRandomArrayElement = function (wizardsParameters) {
    return wizardsParameters[Math.floor(Math.random() * wizardsParameters.length)];
  };
  var wizards = [];
  for (var i = 0; i < WIZARDS_ARRAY_LENGTH; i++) {
    var wizard = {
      name: getRandomArrayElement(firstNames) + ' ' + getRandomArrayElement(lastNames),
      coatColor: getRandomArrayElement(coatColors),
      eyesColor: getRandomArrayElement(eyesColors)
    };
    wizards.push(wizard);
  }
  return wizards;
};

/**
 * Создает новый узел с дополнительными атрибутами
 * @param {Wizard} wizard
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
setupFunction(SETUP);
setupFunction(SETUP_SIMILAR);

