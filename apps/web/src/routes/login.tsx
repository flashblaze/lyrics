import { Title } from "@solidjs/meta";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
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
