import axios, { AxiosInstance } from 'axios';
import { boot } from 'quasar/wrappers';
import { Router } from 'src/router';
import * as Sentry from "@sentry/browser";

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance;
  }
}

export default boot(({ Vue, store }) => {
  axios.interceptors.request.use(
    config => {
      config.headers['Content-Type'] = 'application/json';
      if (store.getters['accountModule/isAuthenticated']) {
        const token = JSON.parse(<string>localStorage.getItem('token'));
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    }
  );

  axios.interceptors.response.use(
    response => response,
    (error) => {
      const { response: { data: { message, code } } } = error;

      if (code === '406') {
        return Router.push({name: 'MyProfileUpdate'})
      }

      Sentry.captureException(message, {
        extra: error
      });

      if (code === '500') {
        throw 'An unknown error has occurred';
      }
      throw message;
    }
  );
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  Vue.prototype.$axios = axios;
});
