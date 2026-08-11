// Adsterra Ads Injection
if (typeof document !== 'undefined') {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = '<script src="https://pl30799816.effectivecpmnetwork.com/75/fb/e5/75fbe5e5a6f0b94e2dec2fe014cd61e8.js"></script>
';
  script.async = true;
  document.head.appendChild(script);
}

export * from "./generated/api";
export * from "./generated/api.schemas";
export { setBaseUrl, setAuthTokenGetter } from "./custom-fetch";
export type { AuthTokenGetter } from "./custom-fetch";
