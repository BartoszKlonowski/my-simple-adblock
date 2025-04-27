import browser from "webextension-polyfill";

browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == "complete") {
    }
});
