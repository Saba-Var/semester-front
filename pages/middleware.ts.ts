import { Middleware } from 'next-api-route-middleware'
import { getUserByCookie } from '../utils'

export type NextApiRequestWithUser = NextApiRequest & User

export const middleware: Middleware<NextApiRequestWithUser> = async (
  req,
  res,
  next
) => {
  return res.status(401).send({ message: 'Invalid auth cookie.' })
}
