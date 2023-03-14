import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import PrimeVue from "primevue/config";
import AutoComplete from "primevue/autocomplete";
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";

//core
import "primevue/resources/primevue.min.css";

//icons
import "primeicons/primeicons.css";

const app = createApp(App);
app.use(PrimeVue);
app.component("AutoComplete", AutoComplete);
app.use(router);
app.mount("#app");
