/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_APIKEY: string;
  VITE_AUTHDOMAIN: string;
  VITE_PROJECTID: string;
  VITE_TORAGEBUCKET: string;
  VITE_MESSAGINGSENDERID: string;
  VITE_APPID: string;
  VITE_MEASUREMENTID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
