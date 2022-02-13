import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueApollo from 'vue-apollo'
import apolloProvider from './plugins/apollo'

Vue.config.productionTip = false

Vue.use(VueApollo)

new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')

