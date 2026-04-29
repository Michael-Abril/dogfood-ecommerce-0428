import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ status: 'healthy', stack: 'ecommerce-payments', date: '2026-04-28' })
}
