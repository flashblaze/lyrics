import { browser } from "wxt/browser";

export default defineBackground(async () => {
  const tabs = await browser.tabs.query({});
  const tab = tabs.find((ele) => ele.url?.includes("http://localhost"));
  if (tab?.url) {
    const cookie = await browser.cookies.get({
      url: tab.url,
      name: "genius-lyrics-token",
    });
    console.log(cookie?.value);
  }
});
