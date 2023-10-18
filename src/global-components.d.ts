// Base
import BaseAlert from '@/components/Base/BaseAlert.vue'
import BaseButton from '@/components/Base/BaseButton.vue'
import BaseSpinner from '@/components/Base/BaseSpinner.vue'
import BaseInput from '@/components/Base/BaseInput.vue'

//Layout
import AppHeader from '@/components/Layout/AppHeader.vue'
import AppSideBar from '@/components/Layout/AppSideBar.vue'
import AppFooter from '@/components/Layout/AppFooter.vue'

//Cards
import OblastCard from "@/components/Card/OblastCard.vue"

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    // Base
    BaseAlert: typeof BaseAlert
    BaseInput: typeof BaseInput
    BaseButton: typeof BaseButton
    BaseSpinner: typeof BaseSpinner

    //Layout
    AppHeader: typeof AppHeader
    AppSideBar: typeof AppSideBar
    AppFooter: typeof AppFooter

    //Cards
    OblastCard: typeof OblastCard
  }
}
