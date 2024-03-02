import { Title } from "@solidjs/meta";
import { cache, createAsync } from "@solidjs/router";
import { Show } from "solid-js";
import { getRequestEvent } from "solid-js/web";
import { getCookie } from "vinxi/http";

const getAccessToken = cache(async () => {
  "use server";
  const event = getRequestEvent();
  const cookie = getCookie(event, "genius-lyrics-token");
  return cookie;
}, "token");

export const route = {
  load: () => getAccessToken(),
};

export default function Home() {
  const token = createAsync(() => getAccessToken());

  return (
    <main>
      <Title>Hello World</Title>
      <Show when={token()} fallback={<p>No data</p>}>
        <p>{token()}</p>
      </Show>
    </main>
  );
}
