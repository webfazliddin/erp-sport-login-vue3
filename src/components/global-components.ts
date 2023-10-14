import type { App } from 'vue'

// Base components
import BaseAlert from '@/components/Base/BaseAlert.vue'
import BaseInput from '@/components/Base/BaseInput.vue'
import BaseButton from "@/components/Base/BaseButton.vue";
import BaseSpinner from "@/components/Base/BaseSpinner.vue";


export default {
  install(app: App): void {
    // Configure some parameters before installing components

    // Register global components here
    app.component('BaseAlert', BaseAlert)
    app.component("BaseButton", BaseButton);
    app.component('BaseInput', BaseInput)
    app.component("BaseSpinner", BaseSpinner);
  }
}
