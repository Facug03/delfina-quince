import { SHEET_ID } from '@/config'
import { googleSheets } from '@/lib/sheets'
import { SuggestMusic } from '@/types'
import { findRowForInsertion } from '@/utils/getLastRow'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const body = req.body

    const data = JSON.parse(body) as SuggestMusic

    const rowForSecondFunction = await findRowForInsertion('D')

    await googleSheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: `Data!D${rowForSecondFunction}`,
      insertDataOption: 'INSERT_ROWS',
      valueInputOption: 'RAW',
      requestBody: {
        values: [[data.name, data.song]],
      },
    })

    res.status(200).json({ message: 'Data agregada exitosamente.' })
  } else {
    res.status(405)
  }
}
