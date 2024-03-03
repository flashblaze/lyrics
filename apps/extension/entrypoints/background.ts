import { browser } from "wxt/browser";
import { storage } from "wxt/storage";

export default defineBackground(() => {
  browser.tabs.query({}).then((tabs) => {
    const tab = tabs.find((ele) => ele.url?.includes("http://localhost"));
    if (tab?.url) {
      browser.cookies
        .get({
          url: tab.url,
          name: "genius-lyrics-token",
        })
        .then((cookie) => {
          if (cookie?.value) {
            storage.setItem("local:accessToken", cookie.value);
          }
        });
    }
  });
});
