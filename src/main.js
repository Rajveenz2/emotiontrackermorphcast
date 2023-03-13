import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import PrimeVue from "primevue/config";
import AutoComplete from "primevue/autocomplete";
import Dropdown from "primevue/dropdown";

const app = createApp(App);
app.use(PrimeVue);
app.component("AutoComplete", AutoComplete);
app.component("Dropdown", Dropdown);
app.use(router);
app.mount("#app");
