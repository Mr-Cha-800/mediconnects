import { boot } from 'quasar/wrappers';
import { defineCustomElements } from '@ionic/pwa-elements/loader'

export default boot(() => {
  return defineCustomElements(window);
});
