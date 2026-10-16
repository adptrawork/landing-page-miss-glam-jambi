# Miss Glam Jambi — Landing Page Jambi

Astro + Tailwind, Full SEO 100%, 1 repo per 1 bisnis.

## Dev
```bash
npm install
npm run dev
npm run build
```

## Deploy (TODO-DEPLOY, belum dieksekusi)
- Framework Preset: Astro
- Build Command: `npm run build`
- Output: `dist/`
- Connect to Git di Cloudflare Pages → pilih repo ini
- Custom domain + SSL otomatis setelah setup domain

## SUMBER GAMBAR & STATUS SCRAPING (2026-10-16)

Prioritas: 1) situs milik target, 2) situs resmi brand disalin lokal ke public/images (<=100KB), 3) picsum fallback HANYA slot terblokir.

### Gambar real per produk

- missglam-p1.jpg <- skintific.com Mugwort Clay Mask Stick
- missglam-p2.jpg <- glad2glow.com Centella Acne Serum
- missglam-p3.jpg <- facetology.id Triple Care Exfo Toner
- missglam-p6.jpg <- eminacosmetics.com homepage thumb (generik, varian konfirmasi WA)
- missglam-hero.jpg <- missglam.id toko/GP.webp (foto gerai resmi)
- missglam-toko-2/3.jpg <- missglam.id dalam-toko.webp + dalam-toko2.webp (interior resmi)
- Slot picsum: missglam-4 (Wardah), missglam-5 (Make Over), missglam-7 (Scarlett), missglam-8 (Parfum Dubai)

### URL terblokir / tidak bisa di-scrape

- desty.page/istanacosmetics -> fetch kosong (JS-only/proteksi)
- shopee.co.id/4 toko -> cangkang JS + anti-bot, tanpa data produk
- instagram.com 4 akun -> login-walled
- wardahbeauty.com produk -> 404 custom, katalog via JS tanpa API publik
- scarlettwhitening.com -> Next.js JS-only
- youmakeups.com, pixycosmetics.com, lavojoy.id -> DNS tidak resolve
- omgbeauty.com -> respons kosong
- vivacosmetics.com -> me-serve konten implora (parked/shared?) -> tidak dipakai
- azarine.id -> Store API products kosong
- makeoverforall.com -> timeout berulang
- tiktok.com 3 akun -> butuh JS/login; hanya tautan profil
- emina/implora thumbs -> tanpa alt varian; dipakai generik + caption jujur
- facetology.id varian Oat -> tidak ada di katalog API
