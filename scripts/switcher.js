const btnCont = document.createElement('div');
const prevBtn = document.createElement('button');
const nextBtn = document.createElement('button');

btnCont.id = 'ktsExtCont';
prevBtn.id = 'ktsExtPrevBtn';
nextBtn.id = 'ktsExtNextBtn';

prevBtn.textContent = 'Previous Tab';
nextBtn.textContent = 'Next Tab';

btnCont.classList.add('kts-ext-cont');
prevBtn.classList.add('kts-ext-button-default', 'kts-ext-button-prev');
nextBtn.classList.add('kts-ext-button-default', 'kts-ext-button-next');

const bodyElem = document.querySelector('body');

bodyElem.insertAdjacentElement('afterbegin', btnCont);
btnCont.appendChild(prevBtn);
btnCont.appendChild(nextBtn);

function sendPrevMessage() {
    chrome.runtime.sendMessage({ type: 'prev' });
}

function sendNextMessage() {
    chrome.runtime.sendMessage({ type: 'next' });
}

prevBtn.addEventListener('click', sendPrevMessage);

nextBtn.addEventListener('click', sendNextMessage);