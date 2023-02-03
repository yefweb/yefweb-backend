// env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_SANITY_STUDIO_PROJECT_ID: string
  readonly VITE_APP_SANITY_STUDIO_DATASET: string
  // more env variables...
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
