export const business = {
  name: 'Miss Glam Jambi',
  slug: 'miss-glam-jambi',
  category: 'Skincare & Kosmetik Lokal',
  city: 'Kota Jambi',
  rating: 4.5,
  reviewCount: 210,
  phone: '6281234567890', // TODO-GANTI: nomor WA aktif pemilik
  mapsUrl: 'https://maps.google.com/?q=Miss%20Glam%20Jambi%20Jambi',
  address: 'Kota Jambi, Provinsi Jambi',
  hours: 'Senin–Sabtu 09.00–21.00, Minggu 10.00–20.00',
  title: 'Miss Glam Jambi — Routine Skincare & Promo Kosmetik',
  description: 'Miss Glam Jambi: edukasi skincare routine, katalog kosmetik kompetitif, pesan via WhatsApp cepat.',
  canonicalPath: '/',
  ogImage: '/og-default.jpg',
};

export const waLink = (message: string) =>
  `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;

export const products = [
  {
    "name": "Paket Brightening Basic",
    "price": "Rp 149.000",
    "badge": "BPOM",
    "stock": "Ready"
  },
  {
    "name": "Paket Acne Care",
    "price": "Rp 169.000",
    "badge": "Original",
    "stock": "Ready"
  },
  {
    "name": "Bundling Serum + Moisturizer",
    "price": "Rp 199.000",
    "badge": "Promo Bundling",
    "stock": "Ready"
  },
  {
    "name": "Sunscreen Daily SPF50",
    "price": "Rp 89.000",
    "badge": "BPOM",
    "stock": "Ready"
  },
  {
    "name": "Lip Tint Best Seller",
    "price": "Rp 45.000",
    "badge": "Original",
    "stock": "Ready"
  },
  {
    "name": "Masker Mingguan",
    "price": "Rp 35.000",
    "badge": "BPOM",
    "stock": "Ready"
  }
];
