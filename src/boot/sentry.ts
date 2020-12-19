import * as Sentry from '@sentry/browser';
import { Vue as VueIntegration } from '@sentry/integrations';
import { Integrations } from '@sentry/tracing';
import { boot } from 'quasar/wrappers';

export default boot(({ Vue }) => {
  Sentry.init({
    dsn: 'https://855f961bfc6547e382f88231a92bd6c3@o466786.ingest.sentry.io/5481387',
    integrations: [
      new VueIntegration({
        Vue,
        tracing: true,
      }),
      new Integrations.BrowserTracing(),
    ],

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
  });
});

