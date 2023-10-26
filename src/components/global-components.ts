import type { App } from 'vue'

//Global components
import BackButton from '@/components/Global/BackButton.vue'
import CreateButton from '@/components/Global/CreateButton.vue'
import WhiteContainer from '@/components/Global/WhiteContainer.vue'
import Search from '@/components/Global/Search.vue'

// Base components
import BaseAlert from '@/components/Base/BaseAlert.vue'
import BaseInput from '@/components/Base/BaseInput.vue'
import BaseButton from '@/components/Base/BaseButton.vue'
import BaseSpinner from '@/components/Base/BaseSpinner.vue'

//Layout
import AppHeader from '@/components/Layout/AppHeader.vue'
import AppSideBar from '@/components/Layout/AppSideBar.vue'
import AppFooter from '@/components/Layout/AppFooter.vue'

//Card
import OblastCard from '@/components/Card/OblastCard.vue'

export default {
  install(app: App): void {
    // Configure some parameters before installing components

    // Register global components here
    //Global
    app.component('BackButton', BackButton)
    app.component('CreateButton', CreateButton)
    app.component('WhiteContainer', WhiteContainer)
    app.component('Search', Search)

    //Base
    app.component('BaseAlert', BaseAlert)
    app.component('BaseButton', BaseButton)
    app.component('BaseInput', BaseInput)
    app.component('BaseSpinner', BaseSpinner)

    //Layout
    app.component('AppHeader', AppHeader)
    app.component('AppSideBar', AppSideBar)
    app.component('AppFooter', AppFooter)

    //Crads
    app.component('OblastCard', OblastCard)
  }
}
