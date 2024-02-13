import { redirect } from "@solidjs/router";
import type { APIEvent } from "@solidjs/start/server";

export async function GET({ request }: APIEvent) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  if (!code) return redirect("/");
  const response = await fetch("https://api.genius.com/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code,
      client_id: import.meta.env.VITE_GENIUS_CLIENT_ID,
      client_secret: import.meta.env.VITE_GENIUS_CLIENT_SECRET,
      grant_type: "authorization_code",
      redirect_uri: `${import.meta.env.VITE_LOCAL_BASE_URL}/api/signup-login`,
      response_type: "code",
    }),
  });
  const data = await response.json();
  console.log(data);
  return redirect("/");
}
