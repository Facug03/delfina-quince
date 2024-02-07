import { auth, sheets } from '@googleapis/sheets'
import { GOOGLE_EMAIL, GOOGLE_KEY } from '@/config'

const client = new auth.JWT(GOOGLE_EMAIL, '', GOOGLE_KEY, [
  'https://www.googleapis.com/auth/spreadsheets',
])

export const googleSheets = sheets({ version: 'v4', auth: client })
