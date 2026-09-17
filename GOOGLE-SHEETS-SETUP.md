# Sambungan Google Sheets

1. Cipta Google Sheet baharu.
2. Buka `Extensions > Apps Script`.
3. Salin kandungan `google-apps-script/Code.gs` ke Apps Script.
4. Pilih fungsi `setup` dan tekan **Run** sekali. Benarkan akses Google apabila diminta.
5. Pilih `Deploy > New deployment`.
6. Pilih jenis **Web app**, tetapkan `Execute as: Me` dan `Who has access: Anyone`.
7. Salin URL Web App yang berakhir dengan `/exec`.
8. Tampal URL itu menggantikan `PASTE_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE` dalam `script.js`.

Setiap RSVP akan masuk ke tab `RSVP` dengan timestamp, nama, emel rasmi, telefon, jabatan/unit dan status kehadiran.

Jika tab `RSVP` telah wujud daripada versi lama, jalankan fungsi `setup()` sekali lagi untuk mengemas kini tajuk kolum dan membuang kolum lama `Bilangan Kehadiran`.
