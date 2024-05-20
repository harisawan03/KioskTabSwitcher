const btnCont = document.createElement('div');
const prevBtn = document.createElement('button');
const nextBtn = document.createElement('button');
const closeBtn = document.createElement('button');

btnCont.id = 'ktsExtCont';
prevBtn.id = 'ktsExtPrevBtn';
nextBtn.id = 'ktsExtNextBtn';

prevBtn.textContent = 'Previous Tab';
nextBtn.textContent = 'Next Tab';
closeBtn.textContent = 'Close Tab';

btnCont.classList.add('kts-ext-cont');
prevBtn.classList.add('kts-ext-button-default', 'kts-ext-button-prev');
nextBtn.classList.add('kts-ext-button-default', 'kts-ext-button-next');
closeBtn.classList.add('kts-ext-button-default', 'kts-ext-button-close');

const bodyElem = document.querySelector('body');

bodyElem.insertAdjacentElement('afterbegin', btnCont);
btnCont.appendChild(prevBtn);
btnCont.appendChild(nextBtn);
btnCont.appendChild(closeBtn);

function sendPrevMessage() {
    chrome.runtime.sendMessage({ type: 'prev' });
}

function sendNextMessage() {
    chrome.runtime.sendMessage({ type: 'next' });
}

function sendCloseMessage() {
    chrome.runtime.sendMessage({ type: 'close' });
}

prevBtn.addEventListener('click', sendPrevMessage);
nextBtn.addEventListener('click', sendNextMessage);
closeBtn.addEventListener('click', sendCloseMessage);
