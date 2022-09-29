export type HrefData =
  | string
  | {
      pathname: string
      query: {
        id: string
      }
    }
