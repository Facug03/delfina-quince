import { SHEET_ID } from '@/config'
import { googleSheets } from '@/lib/sheets'

export async function findRowForInsertion(column: string): Promise<number> {
  const response = await googleSheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: `Data!${column}1:${column}`,
  })

  const values = response.data.values || []
  let rowToInsert = 1

  for (const [index, value] of values.entries()) {
    if (!value[0]) {
      rowToInsert = index + 1
      break
    }
  }

  return rowToInsert
}
