import { Title } from "@solidjs/meta";
import { cache, createAsync } from "@solidjs/router";
import { Show } from "solid-js";
import getSession from "~/lib/session";

const getStudents = cache(async () => {
  "use server";
  const sessionData = await getSession();
  return sessionData.data;
}, "user");

export const route = {
  load: () => getStudents(),
};

export default function Home() {
  const students = createAsync(() => getStudents());

  return (
    <main>
      <Title>Hello World</Title>
      <Show when={students()} fallback={<p>No data</p>}>
        <p>{students()?.accessToken}</p>
      </Show>
    </main>
  );
}
