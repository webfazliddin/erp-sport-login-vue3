import type { App } from 'vue'

// Base components
import BaseAlert from '@/components/Base/BaseAlert.vue'
import BaseInput from '@/components/Base/BaseInput.vue'
import BaseButton from "@/components/Base/BaseButton.vue";
import BaseSpinner from "@/components/Base/BaseSpinner.vue";

//Layout
import AppHeader from "@/components/Layout/AppHeader.vue"
import AppSideBar from "@/components/Layout/AppSideBar.vue"
import AppFooter from "@/components/Layout/AppFooter.vue"

export default {
  install(app: App): void {
    // Configure some parameters before installing components

    // Register global components here
    //Base
    app.component('BaseAlert', BaseAlert)
    app.component("BaseButton", BaseButton);
    app.component('BaseInput', BaseInput)
    app.component("BaseSpinner", BaseSpinner);

    //Layout
    app.component("AppHeader", AppHeader);
    app.component("AppSideBar", AppSideBar);
    app.component("AppFooter", AppFooter);
  }
}
