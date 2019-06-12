'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardsColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var firstNamesRandom;
var lastNamesRandom;
var namesGenerator;
var colorRandom;
var eyesColorRandom;

var wizards = [];

var generateWizardsObject = function () {
  for (var i = 0; i < 4; i++) {
    firstNamesRandom = Math.floor(Math.random() * firstNames.length);
    lastNamesRandom = Math.floor(Math.random() * lastNames.length);
    namesGenerator = firstNames[firstNamesRandom] + ' ' + lastNames[lastNamesRandom];
    colorRandom = wizardsColor[Math.floor(Math.random() * wizardsColor.length)];
    eyesColorRandom = eyesColor[Math.floor(Math.random() * eyesColor.length)];
    wizards[i] = {
      name: namesGenerator,
      coatColor: colorRandom,
      eyesColor: eyesColorRandom
    };
  }
  return wizards;
};
generateWizardsObject();


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
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
console.log(similarListElement);
