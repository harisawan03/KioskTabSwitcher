// const prevBtn = document.querySelector('#ktsExtPrevBtn');
// const nextBtn = document.querySelector('#ktsExtNextBtn');

// prevBtn.addEventListener('touchend', prevTab);
// prevBtn.addEventListener('click', prevTab);

// nextBtn.addEventListener('touchend', nextTab);
// nextBtn.addEventListener('click', nextTab);

function prevTab() {



}

async function nextTab() {
    console.log('test')
    // Get all tabs
    const tabs = await chrome.tabs.query({});

    // Find the current active tab
    var currentTab = tabs.find(tab => tab.active);

    // Find the index of the current tab
    var currentIndex = tabs.indexOf(currentTab);

    // Calculate the index of the next tab
    var nextIndex = (currentIndex + 1) % tabs.length;

    // Get the next tab
    var nextTab = tabs[nextIndex];

    // Activate the next tab
    chrome.tabs.update(nextTab.id, { active: true });

}