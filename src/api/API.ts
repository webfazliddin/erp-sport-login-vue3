import client from '@/api'
import type { ILoginPayload } from '@/types'

export default {
  getAuth: () => {
    return client.post('/account/generatetoken').then((response: any) => {
      return response
    })
  },
  login: (payload: ILoginPayload) => {
    return client.post('/account/signin', payload).then((response: any) => {
      return response
    })
  },
  getOblast: () => {
    return client.get('/Helper/GetOblastList/{lang}').then((data: any) => {
      return data
    })
  }
}
