const SHEET_NAME = 'RSVP';

function setup() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME)
    || SpreadsheetApp.getActiveSpreadsheet().insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Nama Penuh', 'Emel Rasmi', 'No. Telefon', 'Jabatan / Unit', 'Kehadiran']);
    sheet.setFrozenRows(1);
  } else {
    sheet.getRange(1, 1, 1, 6).setValues([['Timestamp', 'Nama Penuh', 'Emel Rasmi', 'No. Telefon', 'Jabatan / Unit', 'Kehadiran']]);
    if (sheet.getLastColumn() > 6) sheet.deleteColumns(7, sheet.getLastColumn() - 6);
  }
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const required = ['name', 'email', 'phone', 'org', 'attendance'];
    if (required.some((key) => !data[key])) throw new Error('Maklumat RSVP tidak lengkap.');

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) throw new Error('Sila jalankan fungsi setup() dahulu.');
    sheet.appendRow([new Date(), data.name, data.email, data.phone, data.org, data.attendance]);

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
