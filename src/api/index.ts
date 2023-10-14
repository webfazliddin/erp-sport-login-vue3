import axios from 'axios'

const client = axios.create({
  baseURL: 'http://sporterp-api.apptest.uz'
})

client.interceptors.request.use(function (config) {
  config.headers['Content-Type'] = 'application/json'
  config.headers.Authorization = localStorage.getItem('loginErpSportAppToken') || undefined

  return config
})

export default client
