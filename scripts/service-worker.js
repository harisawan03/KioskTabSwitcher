async function prevTab() {

    // get all tabs
    const tabs = await chrome.tabs.query({ currentWindow: true });

    // find the current active tab
    const currentTab = tabs.find(tab => tab.active);

    // find the index of the current tab
    const currentIndex = tabs.indexOf(currentTab);

    // calculate the index of the next tab
    const nextIndex = currentIndex === 0 ? tabs.length - 1 : (currentIndex - 1)

    // get the next tab
    const nextTab = tabs[nextIndex];

    // activate the next tab
    chrome.tabs.update(nextTab.id, { active: true });

}

async function nextTab() {

    // get all tabs
    const tabs = await chrome.tabs.query({ currentWindow: true });

    // find the current active tab
    const currentTab = tabs.find(tab => tab.active);

    // find the index of the current tab
    const currentIndex = tabs.indexOf(currentTab);

    // calculate the index of the next tab
    const nextIndex = (currentIndex + 1) % tabs.length;

    // get the next tab
    const nextTab = tabs[nextIndex];

    // activate the next tab
    chrome.tabs.update(nextTab.id, { active: true });

}

async function closeTab() {

    // get all tabs
    const tabs = await chrome.tabs.query({ currentWindow: true });

    // find the current active tab
    const currentTab = tabs.find(tab => tab.active);

    // close the current tab
    chrome.tabs.remove(currentTab.id);

}

// listen for a message from content script and take the desired action
chrome.runtime.onMessage.addListener((message) => {

    if (message.type === 'prev') {
        prevTab();
    }

    if (message.type === 'next') {
        nextTab();
    }

    if (message.type === 'close') {
        closeTab();
    }

});