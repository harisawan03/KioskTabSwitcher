async function prevTab() {

    // Get all tabs
    const tabs = await chrome.tabs.query({ currentWindow: true });

    // Find the current active tab
    const currentTab = tabs.find(tab => tab.active);

    // Find the index of the current tab
    const currentIndex = tabs.indexOf(currentTab);

    // Calculate the index of the next tab
    const nextIndex = currentIndex === 0 ? tabs.length - 1 : (currentIndex - 1)

    // Get the next tab
    const nextTab = tabs[nextIndex];

    // Activate the next tab
    chrome.tabs.update(nextTab.id, { active: true });

}

async function nextTab() {

    // Get all tabs
    const tabs = await chrome.tabs.query({ currentWindow: true });

    // Find the current active tab
    const currentTab = tabs.find(tab => tab.active);

    // Find the index of the current tab
    const currentIndex = tabs.indexOf(currentTab);

    // Calculate the index of the next tab
    const nextIndex = (currentIndex + 1) % tabs.length;

    // Get the next tab
    const nextTab = tabs[nextIndex];

    // Activate the next tab
    chrome.tabs.update(nextTab.id, { active: true });

}

chrome.runtime.onMessage.addListener((message) => {

    if (message.type === 'prev') {
        prevTab();
    }

    if (message.type === 'next') {
        nextTab();
    }

});