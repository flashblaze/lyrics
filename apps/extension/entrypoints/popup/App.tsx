import { createEffect, createSignal, onMount } from "solid-js";
import { browser } from "wxt/browser";
import solidLogo from "@/assets/solid.svg";
import wxtLogo from "/wxt.svg";
import "./App.css";

function App() {
  const [count, setCount] = createSignal(0);

  onMount(async () => {
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

  return (
    <>
      <div>
        <a href="https://wxt.dev" target="_blank">
          <img src={wxtLogo} class="logo" alt="WXT logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>WXT + Solid</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
        <p>
          Edit <code>popup/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the WXT and Solid logos to learn more
      </p>
    </>
  );
}

export default App;
