import { SHEET_ID, googleSheets } from '@/lib/sheets'
import { Assistance } from '@/types'
import { findRowForInsertion } from '@/utils/getLastRow'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const body = req.body

    const data = JSON.parse(body) as Assistance

    const assitance = data.attendace ? 'Si' : 'No'

    console.log(data.name)

    const rowForFirstFunction = await findRowForInsertion('A')

    await googleSheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: `Data!A${rowForFirstFunction}`,
      insertDataOption: 'INSERT_ROWS',
      valueInputOption: 'RAW',
      requestBody: {
        values: [[data.name, assitance]],
      },
    })

    res.status(200).json({ message: 'Data agregada exitosamente.' })
  } else {
    res.status(405)
  }
}
