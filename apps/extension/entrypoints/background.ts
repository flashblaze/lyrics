import { browser } from "wxt/browser";

export default defineBackground(async () => {
  const tabs = await browser.tabs.query({});
  const tab = tabs.find((ele) => ele.url?.includes("http://127.0.0.1"));
  if (tab?.url) {
    const cookie = await browser.cookies.get({
      url: tab.url,
      name: "lyrics_cookie",
    });
    console.log(cookie?.value);
  }
});
