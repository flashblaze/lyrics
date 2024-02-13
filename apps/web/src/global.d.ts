/// <reference types="@solidjs/start/env" />

interface ImportMetaEnv {
  readonly VITE_GENIUS_CLIENT_ID: string;
  readonly VITE_GENIUS_CLIENT_SECRET: string;
  readonly VITE_LOCAL_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
