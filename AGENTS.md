# AGENTS.md

## Project context

Ini ialah landing page statik untuk RSVP 6th INFOTEX, diterbitkan melalui GitHub Pages.

## Rules

- Kekalkan layout, visual identity, section order, content rasmi dan fungsi RSVP sedia ada.
- Jangan rebuild atau redesign halaman untuk perubahan kecil.
- Gunakan fail HTML/CSS/JavaScript sedia ada. Elakkan dependency baharu tanpa sebab yang jelas.
- Gunakan Bahasa Melayu untuk copy rasmi kecuali terjemahan English diperlukan.
- Jangan ubah tarikh, masa, venue, nama jabatan atau tentatif tanpa sumber rasmi.
- Jangan tambah audio. Audio telah dikeluarkan daripada pengalaman E-Card.
- Jangan commit data peserta, credential, token atau API key.
- Google Apps Script Web App ialah endpoint untuk RSVP. Jika endpoint berubah, kemas kini `script.js` dengan berhati-hati.

## Verification

Sebelum commit:

1. Semak JavaScript dengan `node --check`.
2. Uji RSVP validation dan paparan `Dihantar ✓`.
3. Uji BM → EN → BM tanpa reload.
4. Uji E-Card, ESC desktop, session persistence dan mobile layout.
5. Uji Google Calendar, Outlook, `.ics`, Maps dan reduced-motion.
6. Semak `git diff` supaya hanya perubahan berkaitan dimasukkan.

## Git workflow

- Branch deployment: `main`.
- GitHub Pages: `https://azharpoliku.github.io/6th-InfoTEx/`.
- Gunakan commit message ringkas dan deskriptif.
- Jangan commit `node_modules/` atau output sementara.
