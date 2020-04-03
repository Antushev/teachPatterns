'use strict';

class FormObserver {
    constructor() {
        this.observers = [];
    }

    subscribe (fnc) {
        this.observers.push(fnc);
    }

    unsubscribe (fnc) {
        this.observers = this.observers.filter(subscriber => subscriber !== fnc);
    }

    broadcast () {
        this.observers.forEach(fnc => fnc());
    }
}

const fieldFirstName = document.querySelector('#first-name');
const fieldLastName = document.querySelector('#last-name');
const countWordField = document.querySelector('.result-list__item--count-word');
const countLetterField = document.querySelector('.result-list__item--count-letter');
const textareaAbout = document.querySelector('textarea');

const formObserver = new FormObserver();

const getNumberWord = () => {
    const numberWordFirstName = fieldFirstName.value.split(' ')[0] === '' || fieldFirstName.value.split(' ')[0] === ' '
        ? 0 : fieldFirstName.value.split(' ').length;
    const numberWordLastName = fieldLastName.value.split(' ')[0] === '' || fieldLastName.value.split(' ')[0] === ' '
        ? 0 : fieldLastName.value.split(' ').length;
    const numberWordAbout = textareaAbout.value.split(' ')[0] === ''
        || textareaAbout.value.split(' ')[0] === ' '
        ? 0 : textareaAbout.value.split(' ').length;

    return numberWordFirstName + numberWordLastName + numberWordAbout;
};

const getNumberLetter = () => {
    return fieldFirstName.value.length + fieldLastName.value.length + textareaAbout.value.length;
};

formObserver.subscribe(() => {
    countWordField.textContent = 'Уже написано слов: ' + getNumberWord();
});

formObserver.subscribe(() => {
    countLetterField.textContent = 'Уже написано букв: ' + getNumberLetter();
});

fieldFirstName.addEventListener('input', () => {
    formObserver.broadcast();
});

fieldLastName.addEventListener('input', () => {
    formObserver.broadcast();
});

textareaAbout.addEventListener('input', () => {
    formObserver.broadcast();
});
