# DESIGN.md — 6th INFOTEX RSVP

## Arah visual

Reka bentuk mengekalkan DNA poster INFOTEX dalam bentuk landing page yang lebih bersih:

- Dark technology base
- Emerald green sebagai surface dan depth
- Orange/red sebagai accent dan CTA
- Yellow/lime sebagai highlight
- Visual hero teknologi baharu digunakan sebagai artwork utama
- Poster asal tidak digunakan dalam hero

## Tipografi

- Display: Barlow Condensed untuk tajuk besar dan nombor.
- UI/body: Space Grotesk untuk navigation, borang dan teks sokongan.
- Tajuk perlu kuat tetapi tidak memenuhi skrin mobile.
- Elakkan label dan dekorasi yang tidak menambah makna.

## Struktur visual

1. Hero dengan tajuk 6th INFOTEX, CTA dan metadata acara.
2. Maklumat program dan kad ringkas.
3. Kategori pertandingan.
4. Program pelajar.
5. Tentang INFOTEX.
6. Atur cara timeline.
7. Countdown.
8. RSVP dan success state.
9. Lokasi dengan Google Maps embed rasmi.
10. Footer jabatan.

## Interaksi

- E-Card muncul sebagai overlay pertama untuk setiap session baharu.
- Penutupan menggunakan fade, scale-down dan blur.
- Switcher BM/EN berada dalam header dan menggunakan `localStorage`.
- Success state menyediakan calendar popover, Google Calendar, Outlook dan `.ics`.
- CTA mempunyai hover dan active state yang kecil.
- Card menggunakan hover lift maksimum sekitar 4px.

## Responsive behaviour

- Mobile breakpoint utama: 800px dan 560px.
- Navigation dipadatkan pada mobile.
- Hero artwork dikecilkan dan parallax dimatikan pada mobile.
- RSVP form menjadi satu kolum.
- Calendar options disusun secara menegak pada skrin kecil.
- Tiada elemen boleh menyebabkan horizontal scrolling.

## Motion principles

- Gunakan opacity, transform dan filter sahaja untuk motion utama.
- Hero dan section reveal berlaku sekali sahaja.
- Parallax desktop maksimum sekitar 5–12px.
- Hormati `prefers-reduced-motion` dengan mematikan parallax dan mengurangkan transition.
- Tiada animasi flashy, cyberpunk, gaming atau glow berlebihan.

## Assets

- `hero-art.png`: artwork hero semasa.
- `poster.png`: aset poster asal, bukan digunakan dalam design aktif.

## Warna teras

- Background: `#061512`
- Emerald: `#0D4938`
- Lime: `#D9E327`
- Orange: `#FF7410`
- Red: `#F12618`
- Cream: `#F3F1E7`
