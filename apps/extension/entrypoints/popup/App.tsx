import solidLogo from "@/assets/solid.svg";
import wxtLogo from "/wxt.svg";
import "./App.css";
import { storage } from "wxt/storage";
import { Show, createSignal, onMount } from "solid-js";

function App() {
  const [accessToken, setAccessToken] = createSignal<string | undefined>(
    undefined
  );

  onMount(() => {
    storage
      .getItem("local:accessToken")
      .then((res) => setAccessToken(res as string | undefined));
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
      <h1>WXT + Solids</h1>
      <div class="card">
        <Show when={!!accessToken()} fallback={<p>No access token</p>}>
          <p>Access token: {accessToken()}</p>
        </Show>
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
