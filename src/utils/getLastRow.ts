import { SHEET_ID, googleSheets } from '@/lib/sheets'

export async function findRowForInsertion(column: string): Promise<number> {
  const response = await googleSheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: `Data!${column}1:${column}`,
  })

  const values = response.data.values || []
  let rowToInsert = 1

  console.log({ values })
  // Encuentra la primera fila vacía en la columna especificada
  for (const [index, value] of values.entries()) {
    if (!value[0]) {
      rowToInsert = index + 1 // Las filas en Sheets comienzan en 1, no en 0
      break
    }
  }

  return rowToInsert
}
