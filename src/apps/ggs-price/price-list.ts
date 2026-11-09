// GGS Beauty Salon & Spa price list for the printed A4 menu.
// Source: the owner's "Price_cetak.pdf" (Canva, 6 A4 pages). Prices in Rupiah, written as on the print.

export type PriceItem = {
  name: string;
  price: string;
  /** Optional duration line shown under the name (bundling page). */
  duration?: string;
};

export type PriceSection = {
  title?: string;
  /** Italic sub-heading, e.g. "No Bleaching". */
  subtitle?: string;
  items: PriceItem[];
};

export type PricePage = {
  id: string;
  /** Big vertical word on the right side. */
  label: string;
  /** Vertical word size in PDF points (595.5 × 842.25 page). */
  labelSize: number;
  /** Body text size in points. */
  textSize: number;
  /** Section title size in points. */
  titleSize: number;
  /** Row height in points. */
  rowHeight: number;
  /** Right edge of the price column in points. */
  right: number;
  /** Top of the first section title in points. */
  top: number;
  sections: PriceSection[];
};

/** One body/title size shared by every page so the whole list reads evenly. */
export const UNIFORM_TEXT_SIZE = 16.5;
export const UNIFORM_TITLE_SIZE = 18.4;
/** Shared right edge of the price column (points). */
export const UNIFORM_RIGHT = 465;
/** Shared top of the first section (points), just under the tagline and logo. */
export const UNIFORM_TOP = 140;

export const GGS_PRICE_CONTACT = {
  instagram: '@ggsbeauty.hair.co',
  whatsapp: '0823-4277-7723',
};

export const GGS_PRICE_PAGES: PricePage[] = [
  {
    id: 'nail-art',
    label: 'NAIL ART',
    labelSize: 47.4,
    textSize: UNIFORM_TEXT_SIZE,
    titleSize: UNIFORM_TITLE_SIZE,
    rowHeight: 40.5,
    right: UNIFORM_RIGHT,
    top: UNIFORM_TOP,
    sections: [
      {
        title: 'NAIL ART & DESIGN',
        items: [
          { name: 'Press On Nail', price: '50.000 - 100.000' },
          { name: 'Kuku Asli Polos/Glitter', price: '50.000' },
          { name: 'Kuku Asli Motif', price: '60.000' },
          { name: 'Kuku asli Cat Eye', price: '100.000' },
          { name: 'Kuku asli fullcateye + Chrome', price: '150.000' },
          { name: 'Fake nail', price: '100.000' },
          { name: 'Motif', price: '5.000 - 10.000' },
          { name: 'Kuku palsu fullcateye + Chrome', price: '250.000' },
          { name: 'Motif sulit', price: '10.000 - 15.000' },
          { name: 'Kuku asli kaki', price: '50.000' },
          { name: 'Tambah aksesoris', price: '2.000 - 3.000' },
          { name: 'Tambah nail 1 jari', price: '10.000' },
          { name: 'Remover nail', price: '25.000' },
        ],
      },
    ],
  },
  {
    id: 'haircuts',
    label: 'HAIR & STYLE',
    labelSize: 37.4,
    textSize: UNIFORM_TEXT_SIZE,
    titleSize: UNIFORM_TITLE_SIZE,
    rowHeight: 35,
    right: UNIFORM_RIGHT,
    top: UNIFORM_TOP,
    sections: [
      {
        title: 'HAIRCUTS & STYLING',
        items: [
          { name: 'Cuci rambut', price: '25.000' },
          { name: 'Cuci blow', price: '50.000' },
          { name: 'Cuci catok', price: '50.000' },
          { name: 'Cuci catok/curly rambut sambung', price: '60.000' },
          { name: 'Cuci curly', price: '55.000' },
          { name: 'Curly rambut', price: '45.000' },
          { name: 'Curly rambut sambung', price: '55.000' },
          { name: 'Catok rambut pendek', price: '40.000' },
          { name: 'Catok rambut panjang', price: '45.000' },
          { name: 'Catok rambut sambung', price: '50.000' },
          { name: 'Potong rambut', price: '50.000' },
          { name: 'Potong poni', price: '20.000' },
          { name: 'Potong cuci catok', price: '85.000' },
          { name: 'Potong cuci curly', price: '90.000' },
          { name: 'Potong cuci blow', price: '85.000' },
        ],
      },
    ],
  },
  {
    id: 'colouring-creambath',
    label: 'HAIR & STYLE',
    labelSize: 37.4,
    textSize: UNIFORM_TEXT_SIZE,
    titleSize: UNIFORM_TITLE_SIZE,
    rowHeight: 34,
    right: UNIFORM_RIGHT,
    top: UNIFORM_TOP,
    sections: [
      {
        title: 'COLOURING FULL WARNA',
        subtitle: 'No Bleaching',
        items: [
          { name: 'Pendek', price: '200.000 - 250.000' },
          { name: 'Sedang', price: '250.000 - 450.000' },
          { name: 'Panjang', price: '350.000 - 600.000' },
        ],
      },
      {
        subtitle: 'Bleaching',
        items: [
          { name: 'Pendek', price: '350.000 - 450.000' },
          { name: 'Sedang', price: '400.000 - 600.000' },
          { name: 'Panjang', price: '550.000 - 800.000' },
        ],
      },
      {
        title: 'CREAMBATH',
        items: [
          { name: 'Creambath cultusia', price: '80.000' },
          { name: 'Creambath CBD', price: '120.000' },
          { name: 'Creambath makarizo', price: '120.000' },
          { name: 'Creambath L’Oréal', price: '150.000' },
          { name: 'Creambath L’Oréal warna', price: '175.000' },
        ],
      },
    ],
  },
  {
    id: 'hair-treatment',
    label: 'HAIR & STYLE',
    labelSize: 37.4,
    textSize: UNIFORM_TEXT_SIZE,
    titleSize: UNIFORM_TITLE_SIZE,
    rowHeight: 30.6,
    right: UNIFORM_RIGHT,
    top: UNIFORM_TOP,
    sections: [
      {
        title: 'HAIR TREATMENT',
        items: [
          { name: 'Treatment ketombe', price: '120.000' },
          { name: 'Treatment kutu anak (1-5 th)', price: '120.000' },
          { name: 'Treatment kutu dewasa', price: '175.000' },
          { name: 'Treatment rambut bercabang', price: '100.000' },
          { name: 'Masker', price: '60.000' },
        ],
      },
      {
        title: 'KERATIN TREATMENT',
        items: [
          { name: 'Pendek (tipis - tebal)', price: '550.000' },
          { name: 'Sedang (tipis-tebal)', price: '650.000 - 700.000' },
          { name: 'Panjang', price: '600.000 - 800.000' },
        ],
      },
      {
        title: 'KERATIN SMOOTHING',
        items: [
          { name: 'Pendek', price: '350.000' },
          { name: 'Sedang', price: '450.000 - 550.000' },
          { name: 'Panjang', price: '600.000 - 800.000' },
        ],
      },
      {
        title: 'COLOURING HIGHLIGHT',
        items: [
          { name: 'Pendek', price: '350.000' },
          { name: 'Sedang', price: '450.000 - 700.000' },
          { name: 'Panjang', price: '650.000 - 1.000.000' },
        ],
      },
    ],
  },
  {
    id: 'massage-body',
    label: 'MASSAGE',
    labelSize: 47.4,
    textSize: UNIFORM_TEXT_SIZE,
    titleSize: UNIFORM_TITLE_SIZE,
    rowHeight: 50,
    right: UNIFORM_RIGHT,
    top: UNIFORM_TOP,
    sections: [
      {
        title: 'MASSAGE SERVICE',
        items: [
          { name: 'Full body massage 60 menit', price: '90.000' },
          { name: 'Full body massage 90 menit', price: '120.000' },
          { name: 'Reflexion 60 menit', price: '95.000' },
          { name: 'Pijat urut tradisional khusus pria', price: 'Start 100K' },
        ],
      },
      {
        title: 'FACE TREATMENT',
        items: [{ name: 'Totok wajah + masker 45 menit', price: '65.000' }],
      },
      {
        title: 'MENIPEDI',
        items: [
          { name: 'MeniPedi', price: '120.000' },
          { name: 'Menicure', price: '70.000' },
          { name: 'Pedicure', price: '80.000' },
        ],
      },
    ],
  },
  {
    id: 'body-treatment',
    label: 'BODY',
    labelSize: 47.4,
    textSize: UNIFORM_TEXT_SIZE,
    titleSize: UNIFORM_TITLE_SIZE,
    rowHeight: 37.6,
    right: UNIFORM_RIGHT,
    top: UNIFORM_TOP,
    sections: [
      {
        title: 'BODY TREATMENT',
        items: [
          { name: 'Ratus', price: '50.000' },
          { name: 'Waxing ketiak', price: '50.000' },
          { name: 'Masker ketiak', price: '30.000' },
          { name: 'Waxing tangan', price: '85.000' },
          { name: 'Waxing kaki', price: '130.000' },
          { name: 'Waxing tangan + kaki', price: '190.000' },
          { name: 'Waxing ketiak + tangan + kaki', price: '230.000' },
          { name: 'Bekam full body', price: '140.000' },
          { name: 'Bekam punggung', price: '75.000' },
          { name: 'Bekam tangan', price: '50.000' },
          { name: 'Bekam kaki', price: '50.000' },
          { name: 'Lulur scrub badan', price: '80.000' },
          { name: 'Masker badan', price: '60.000' },
          { name: 'Lulur + masker', price: '120.000' },
        ],
      },
    ],
  },
  {
    id: 'bundling',
    label: 'MASSAGE',
    labelSize: 47.4,
    textSize: UNIFORM_TEXT_SIZE,
    titleSize: UNIFORM_TITLE_SIZE,
    rowHeight: 65,
    right: UNIFORM_RIGHT,
    top: UNIFORM_TOP,
    sections: [
      {
        title: 'BUNDLING PACKAGE',
        items: [
          { name: 'Body massage + reflexy', price: '140.000', duration: '90 menit' },
          { name: 'Body massage + kerok', price: '145.000', duration: '90 menit' },
          { name: 'Body massage + scrub + masker badan', price: '180.000', duration: '120 menit' },
          { name: 'Body massage + totok wajah', price: '155.000', duration: '90 menit' },
          { name: 'Body massage + reflexy + scrub', price: '200.000', duration: '120 menit' },
          { name: 'Body massage + reflexy + totok wajah', price: '200.000', duration: '120 menit' },
          { name: 'Body massage + reflexy + kerok', price: '195.000', duration: '120 menit' },
          { name: 'Body massage + bekam', price: '170.000' },
        ],
      },
    ],
  },
  {
    id: 'kids-treatment',
    label: 'KIDS',
    labelSize: 47.4,
    textSize: UNIFORM_TEXT_SIZE,
    titleSize: UNIFORM_TITLE_SIZE,
    rowHeight: 132,
    right: UNIFORM_RIGHT,
    top: UNIFORM_TOP,
    sections: [
      {
        title: 'KHUSUS TREATMENT ANAK',
        items: [
          { name: 'Potong rambut', price: '70.000' },
          { name: 'Nail art', price: '35.000' },
          { name: 'Creambath', price: '80.000' },
          { name: 'Treatment kutu (1-5 tahun)', price: '120.000' },
        ],
      },
    ],
  },
];

/** Looks up a printed price by service name (first match across all pages). */
export function findGgsPrice(name: string): string | undefined {
  for (const page of GGS_PRICE_PAGES) {
    for (const section of page.sections) {
      const item = section.items.find((it) => it.name === name);
      if (item) return item.price;
    }
  }
  return undefined;
}
