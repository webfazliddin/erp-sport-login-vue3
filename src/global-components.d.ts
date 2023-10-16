// Base
import BaseAlert from '@/components/Base/BaseAlert.vue'
import BaseButton from '@/components/Base/BaseButton.vue'
import BaseSpinner from '@/components/Base/BaseSpinner.vue'
import BaseInput from '@/components/Base/BaseInput.vue'

//Layout
import AppHeader from '@/components/Layout/AppHeader'
import AppSideBar from '@/components/Layout/AppSideBar'
import AppFooter from '@/components/Layout/AppFooter'

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
  }
}
