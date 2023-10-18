export interface ILoginPayload {
  username: string
  password: string
}

export interface IResetPayload {
  username: string
  password: string
}

export interface IOblast {
  id?: string
  countryid?: string
  name: string
}
