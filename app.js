const changeMe = document.getElementById('change-me');
const nameField = document.getElementById('name-field');
const changeNameButton = document.getElementById('change-name-button');
const pronounsField = document.getElementById('pronouns-field')
const changePronounsButton = document.getElementById('change-pronouns-button');
const pronouns = document.getElementById('pronouns');
const changeBackgroundButton = document.getElementById('change-background-button');
const nameTag = document.getElementById('name-tag');
const changeFontButton = document.getElementById('change-font-button');

// Change name text when clicking change name button
changeNameButton.addEventListener('click', () => {
    changeMe.textContent = nameField.value;
});

// Change pronouns text when clicking the change pronouns button
changePronounsButton.addEventListener('click', () => {
    pronouns.textContent = pronounsField.value;
});

// Change background color of tag when button is clicked
changeBackgroundButton.addEventListener('click', () => {
    nameTag.style.backgroundColor = '#b4d455';
});

changeFontButton.addEventListener('click', () => {
    nameTag.classList.toggle('font-changed');
});