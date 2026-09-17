# PRD — 6th INFOTEX RSVP

## Ringkasan

Landing page RSVP untuk 6th Information Technology Innovation Expo di Politeknik Kuching Sarawak. Produk ini memudahkan tetamu memahami acara, mengesahkan kehadiran dan menyimpan butiran acara ke kalendar.

## Objektif

- Menyediakan pengalaman RSVP yang cepat pada desktop dan mobile.
- Menyimpan rekod RSVP ke Google Sheets melalui Google Apps Script.
- Memaparkan maklumat acara, kategori pertandingan, program pelajar, tentatif penutupan dan lokasi sebenar.
- Menyokong Bahasa Melayu dan English tanpa reload.
- Menerbitkan halaman melalui GitHub Pages.

## Maklumat rasmi acara

- Nama: 6th Information Technology Innovation Expo (INFOTEX) 2026
- Tarikh: 29 September 2026
- Masa: 8:00 pagi – 5:00 petang
- Lokasi: Dewan Jubli Perak, Politeknik Kuching Sarawak
- Tentatif penutupan: 2:00 petang – 4:30 petang

## Skop semasa

- Hero, maklumat acara, tentang acara dan countdown.
- Kategori: Internet of Things, Web Solution, Mobile Application.
- Program pelajar: DigiTechPreneur 2026 dan AI-Marketeer: From Idea to Impact.
- E-Card welcome modal dengan `sessionStorage`; audio tidak digunakan.
- RSVP: nama penuh, emel rasmi `@poliku.edu.my`, nombor telefon, jabatan/unit dan kehadiran.
- Jabatan/unit terhad kepada Pengurusan dan jabatan akademik PKS.
- Google Sheets, Google Calendar, Outlook, fail `.ics` dan Google Maps.
- Animasi cinematic ringan, hover states, scroll reveal, parallax desktop dan reduced-motion.

## Keperluan bukan fungsi

- Mobile-first dan tiada horizontal overflow.
- Gunakan HTML, CSS dan JavaScript sedia ada tanpa dependency tambahan.
- Kekalkan aksesibiliti keyboard, label borang, contrast dan `prefers-reduced-motion`.
- Jangan masukkan data RSVP contoh ke repository.
- Jangan letakkan credential Google atau API key dalam frontend.

## Data RSVP

Kolum Google Sheets: Timestamp, Nama Penuh, Emel Rasmi, No. Telefon, Jabatan / Unit, Kehadiran.

## Di luar skop

- Akaun pengguna, login dan dashboard admin.
- Backend/database berbayar.
- Pembayaran.
- Audio background.
- Redesign visual atau halaman berasingan untuk bahasa.

## Kriteria penerimaan

- Borang sah menghantar rekod ke Google Sheets.
- Emel bukan `@poliku.edu.my` ditolak.
- Selepas submit, butang menunjukkan `Dihantar ✓` dan skrin kejayaan dipaparkan.
- BM/EN menukar kandungan tanpa reload dan pilihan kekal selepas refresh.
- Calendar links menggunakan masa Malaysia dan venue rasmi.
- E-Card muncul sekali setiap sesi dan boleh ditutup dengan butang atau ESC.
- Layout berfungsi pada mobile dan motion boleh dikurangkan.
