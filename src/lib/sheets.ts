import { auth, sheets } from '@googleapis/sheets'
import secrets from '@/secrets.json'

export const SHEET_ID = '172z9Z0VCn2Ee82OBFhtz4NW4zOe3W9HoCU7ZgwLcsF0'

const client = new auth.JWT(secrets.client_email, '', secrets.private_key, [
  'https://www.googleapis.com/auth/spreadsheets',
])

export const googleSheets = sheets({ version: 'v4', auth: client })

console.log({ googleSheets })
