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
 * Функция создает массив волшебников, сгенерированных случайным образом
 * @param {{
 *   length: number
 * }[]} firstName Имя волшебника
 * @param {{
 *   length: number
 * }[]} lastName Фамилия волшебника
 * @param {{
 *   length: number
 * }[]} coatColor цвет плаща волшебника
 * @param {{
 *   length: number
 * }[]} eyesColor цвет глаз волшебника
 * @return {string[]} массив из волшебников.
 */
var generateWizardsArray = function (firstName, lastName, coatColor, eyesColor) {
  var wizards = [];
  for (var i = 0; i < 4; i++) {
    firstNamesRandom = Math.floor(Math.random() * firstName.length);
    lastNamesRandom = Math.floor(Math.random() * lastName.length);
    namesGenerator = firstName[firstNamesRandom] + ' ' + lastName[lastNamesRandom];
    colorRandom = coatColor[Math.floor(Math.random() * coatColor.length)];
    eyesColorRandom = eyesColor[Math.floor(Math.random() * eyesColor.length)];
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
 * Преобразует массив магов в массив узлов
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
var wizards = generateWizardsArray(FIRST_NAMES, LAST_NAMES, WIZARDS_COLOR, EYES_COLOR);
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');
