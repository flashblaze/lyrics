import { Hono } from "hono";
import { setCookie } from "hono/cookie";

const app = new Hono();

app.get("/", (c) => {
  setCookie(c, "lyrics_cookie", (Math.random() * 100).toString());
  return c.text("Hello Hono!");
});

export default app;
