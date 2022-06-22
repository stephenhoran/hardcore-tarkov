import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';

import "primevue/resources/themes/bootstrap4-dark-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Card from 'primevue/card'

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Row from 'primevue/row';

const app = createApp(App)

app.use(PrimeVue)
app.use(createPinia())
app.use(router)

app.component("Menubar", Menubar)
app.component("Dialog", Dialog)
app.component("Button", Button)
app.component("Card", Card)

app.component("DataTable", DataTable)
app.component("Column", Column)
app.component("Row", Row)


app.mount('#app')
