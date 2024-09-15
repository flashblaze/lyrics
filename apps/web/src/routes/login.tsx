import { Title } from "@solidjs/meta";
import { cache, createAsync, redirect } from "@solidjs/router";
import { getCookie, getEvent } from "vinxi/http";

const getAccessToken = cache(async () => {
  "use server";
  const cookie = getCookie(getEvent(), "genius-lyrics-token");
  if (cookie) {
    return redirect("/");
  }
  return cookie;
}, "user");

export const route = {
  load: () => getAccessToken(),
};

export default function Login() {
  createAsync(() => getAccessToken());

  return (
    <main>
      <Title>Login</Title>
      <p>
        <a
          href={`https://api.genius.com/oauth/authorize?client_id=${
            import.meta.env.VITE_GENIUS_CLIENT_ID
          }&redirect_uri=${
            import.meta.env.VITE_LOCAL_BASE_URL
          }/api/signup-login&scope=me&response_type=code`}
        >
          Login via Genius
        </a>
      </p>
    </main>
  );
}
