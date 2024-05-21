// create buttons and container
const btnCont = document.createElement('div');
const prevBtn = document.createElement('button');
const nextBtn = document.createElement('button');
const closeBtn = document.createElement('button');

// give buttons unique ids
btnCont.id = 'ktsExtCont';
prevBtn.id = 'ktsExtPrevBtn';
nextBtn.id = 'ktsExtNextBtn';
closeBtn.id = 'ktsExtCloseBtn';

// add text to buttons
prevBtn.textContent = 'Previous Tab';
nextBtn.textContent = 'Next Tab';
closeBtn.textContent = 'Close Tab';

// add classes to style buttons
btnCont.classList.add('kts-ext-cont');
prevBtn.classList.add('kts-ext-button-default', 'kts-ext-button-prev');
nextBtn.classList.add('kts-ext-button-default', 'kts-ext-button-next');
closeBtn.classList.add('kts-ext-button-default', 'kts-ext-button-close');

// find the body of the page
const bodyElem = document.querySelector('body');

// add container to body and buttons to container
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

// listen for click and send appropriate message to service worker
prevBtn.addEventListener('click', sendPrevMessage);
nextBtn.addEventListener('click', sendNextMessage);
closeBtn.addEventListener('click', sendCloseMessage);
