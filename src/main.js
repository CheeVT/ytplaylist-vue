import Vue from 'vue'
import App from './App.vue'
import VueGoogleApi from 'vue-google-api/index.js'

const DISCOVERY_DOCS = [
  'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'
];
const SCOPES = 'https://www.googleapis.com/auth/youtube';

const config = {
  apiKey: 'AIzaSyD5QDk2vdX_tBaj3Pjmz64rGFIU3DHVt20',
  clientId: '487319590985-mo2mtuhb33mri92956edjqg2ib63svpo.apps.googleusercontent.com',
  scope: SCOPES,
  discoveryDocs: DISCOVERY_DOCS
}
Vue.use(VueGoogleApi, config)
// eslint-disable-next-line no-console
console.log('Vue', Vue.prototype)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
