export const business = {
  name: 'Miss Glam Jambi',
  slug: 'miss-glam-jambi',
  category: 'Skincare & Kosmetik',
  city: 'Kota Jambi',
  rating: 4.5,
  reviewCount: 210,
  phone: '6281368453311',
  phoneDisplay: '0813-6845-3311 (Cabang Broni)',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Miss+Glam+Broni+Jambi',
  mapsQuery: 'Miss Glam Broni Jambi',
  address: 'Cabang Broni (sebelah UNBARI) & Cabang Mayang Jl Ir H Juanda No.10B Simpang III Sipin, Kota Baru, Jambi',
  addressStatus: 'Terverifikasi',
  hours: 'Cabang Broni 09.30–22.30',
  hoursStatus: 'Terverifikasi',
  instagram: 'https://www.instagram.com/missglam_id',
  instagramLabel: '@missglam_id (akun pusat)',
  title: 'Miss Glam Jambi — Kosmetik Original Broni & Mayang',
  description: 'Miss Glam Jambi 2 cabang Broni & Mayang Kota Baru: kosmetik original PT Bersama Glamindo. Cek stok WA Broni, order Shopee & TikTok.',
  canonicalPath: '/',
  ogImage: '/images/missglam-hero.jpg',
};

export const socials: Array<{ label: string; url: string; note: string }> = [
  { label: 'Website', url: 'https://missglam.id', note: 'missglam.id — PT Bersama Glamindo — Terverifikasi' },
  { label: 'Instagram', url: 'https://www.instagram.com/missglam_id', note: '@missglam_id (pusat) — Terverifikasi' },
  { label: 'TikTok', url: 'https://www.tiktok.com/@missglamjambi._', note: '@missglamjambi._ — Terverifikasi' },
  { label: 'Shopee', url: 'https://shopee.co.id/missglam_jambi', note: 'missglam_jambi — Terverifikasi' },
];

export const storeNotes: string[] = [
  'Cabang Broni: sebelah UNBARI — WA 0813-6845-3311 — Terverifikasi',
  'Cabang Mayang: Jl Ir H Juanda No.10B Simpang III Sipin, Kota Baru — Terverifikasi',
  'Harga di web ini estimasi, konfirmasi via WA toko.',
];

export const waLink = (message: string) =>
  `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;

export const products = [
  { name: 'Skintific Clay Mask Series', price: 'Rp 110–130rb', badge: 'Teruji', stock: 'Tanya Stok', image: '/images/missglam-p1.jpg', alt: 'Skintific Mugwort Clay Mask Stick — foto resmi brand', w: 800, h: 800, source: 'Sumber: skintific.com (official)' },
  { name: 'Glad2Glow Serum Series', price: 'Rp 55–70rb', badge: 'Teruji', stock: 'Tanya Stok', image: '/images/missglam-p2.jpg', alt: 'Glad2Glow Centella Acne Serum — foto resmi brand', w: 800, h: 800, source: 'Sumber: glad2glow.com (official)' },
  { name: 'Facetology Toner Series', price: 'Rp 60–80rb', badge: 'Teruji', stock: 'Tanya Stok', image: '/images/missglam-p3.jpg', alt: 'Facetology Triple Care Exfo Toner — foto resmi brand', w: 800, h: 800, source: 'Sumber: facetology.id (official)' },
  { name: 'Wardah Serum Series', price: 'Rp 70–95rb', badge: 'Estimasi', stock: 'Tanya Stok', image: 'https://picsum.photos/seed/missglam-4/800/600', alt: 'Ilustrasi placeholder serum Wardah — ganti foto asli', w: 800, h: 600, source: 'Foto placeholder — ganti foto asli' },
  { name: 'Make Over Lip Series', price: 'Rp 95–115rb', badge: 'Estimasi', stock: 'Tanya Stok', image: 'https://picsum.photos/seed/missglam-5/800/600', alt: 'Ilustrasi placeholder lip Make Over — ganti foto asli', w: 800, h: 600, source: 'Foto placeholder — ganti foto asli' },
  { name: 'Emina Powder Series', price: 'Rp 40–55rb', badge: 'Teruji', stock: 'Tanya Stok', image: '/images/missglam-p6.jpg', alt: 'Produk Emina — foto resmi eminacosmetics.com, varian pasti konfirmasi via WA', w: 230, h: 230, source: 'Sumber: eminacosmetics.com (official)' },
  { name: 'Scarlett Facial Wash Series', price: 'Rp 55–65rb', badge: 'Estimasi', stock: 'Tanya Stok', image: 'https://picsum.photos/seed/missglam-7/800/600', alt: 'Ilustrasi placeholder Scarlett facial wash — ganti foto asli', w: 800, h: 600, source: 'Foto placeholder — ganti foto asli' },
  { name: 'Parfum Dubai Series', price: 'Rp 50–120rb', badge: 'Estimasi', stock: 'Tanya Stok', image: 'https://picsum.photos/seed/missglam-8/800/600', alt: 'Ilustrasi placeholder parfum Dubai — ganti foto asli', w: 800, h: 600, source: 'Foto placeholder — ganti foto asli' },
];

export const promos = [
  { title: 'Belanja 2 Cabang Bebas Pilih', desc: 'Stok Broni kosong? Tanya cabang Mayang — admin bantu cekkan.', status: 'Terverifikasi — 2 cabang aktif.' },
  { title: 'Bundling Routine Hemat', desc: 'Paket cleanser + toner + sunscreen lebih hemat dibanding satuan.', status: 'Estimasi — harga final via WA.' },
  { title: 'Update Promo di Shopee & TikTok', desc: 'Ikuti Shopee missglam_jambi dan TikTok untuk flash sale.', status: 'Terverifikasi — akun resmi.' },
];
