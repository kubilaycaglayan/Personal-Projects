import functions from './functions';

const content = (function content() {
  const contentDiv = document.getElementById('content');

  const append = function append(element) {
    contentDiv.appendChild(element);
  };

  return {
    append,
  };
}());

const mainButton = (function mainButton() {
  const dropdownButton = functions().createElementWithInnerText('div', 'btn btn-primary', 'Dropdown');
  const clickAction = function clickAction() {
    hiddenButtons.toggle();
  };

  dropdownButton.addEventListener('click', clickAction.bind(this));
  const mainButtonWrapper = functions().createElement('div', 'container-fluid');
  mainButtonWrapper.appendChild(dropdownButton);
  content.append(mainButtonWrapper);
}());

const hiddenButtons = (function hiddenButtons() {
  const hiddenButtonsWrapper = functions().createHiddenElement('div', 'container-fluid');
  content.append(hiddenButtonsWrapper);

  const append = function append(element) {
    hiddenButtonsWrapper.appendChild(element);
  };

  const createButton = function create(link, text) {
    const element = functions().createElementWithInnerTextAndAnchor(link, 'btn btn-warning d-flex w-25', text);
    append(element);
  };

  const changeDisplay = function changeDisplay(display) {
    hiddenButtonsWrapper.style.display = display;
  };

  const showHiddenButtonsWrapper = function showHiddenButtonsWrapper() {
    changeDisplay('block');
  };

  const hideHiddenButtonsWrapper = function hideHiddenButtonsWrapper() {
    changeDisplay('none');
  };

  const getHiddenButtonsWrapperDisplay = function getWrapperDisplay() {
    return hiddenButtonsWrapper.style.display;
  };

  const toggle = function toggle() {
    if (getHiddenButtonsWrapperDisplay() === 'none') {
      showHiddenButtonsWrapper();
      return true;
    }
    hideHiddenButtonsWrapper();
    return false;
  };

  return {
    append,
    createButton,
    toggle,
  };
}());

hiddenButtons.createButton('https://www.google.com', 'Item-1');
hiddenButtons.createButton('https://www.google.com', 'Item-2');
hiddenButtons.createButton('https://www.google.com', 'Item-3');
