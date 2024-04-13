// This file is needed to support autocomplete for process.env
export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // email.js id and key
      NEXT_PUBLIC_EMAILJS_SERVICE_ID: string;
      NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: string;
      NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: string;

      // google verification key (optional) - used for domain verification on https://search.google.com/search-console
      NEXT_PUBLIC_GOOGLE_VERIFICATION_KEY: string;
    }
  }
}
