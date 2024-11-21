/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAIL_JS_KEY: string;
  readonly VITE_EMAIL_JS_SERVICE: string;
  readonly VITE_EMAIL_JS_TEMPLATE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
