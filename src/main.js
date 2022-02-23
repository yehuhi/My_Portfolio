import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebaseInstance from './middleware/firebase';
import 'animate.css';
import "firebase/messaging";

Vue.prototype.$messaging = firebaseInstance
Vue.config.productionTip = false;

firebaseInstance.firebase.auth().onAuthStateChanged((user) => {
    window.user = user;
    new Vue({
        router,
        store,
        vuetify,
        render: h => h(App)
    }).$mount('#app')
})