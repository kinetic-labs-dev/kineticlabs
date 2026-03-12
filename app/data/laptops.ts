export const laptops = [
  {
    id: "dell-xps-15",
    name: "Dell XPS 15 9500",
    category: "Professional",
    price: 995,
    originalPrice: 1799,
    image: "/products/dell-xps-15/hero.webp",
    images: [
      "/products/dell-xps-15/hero.webp",
      "/products/dell-xps-15/frontal.webp",
      "/products/dell-xps-15/lateral.webp",
      "/products/dell-xps-15/teclado.webp",
      "/products/dell-xps-15/trasera.webp"
    ],
    cpu: "Intel Core i9-10885H",
    ram: "64GB DDR4",
    storage: "2TB NVMe SSD",
    screen: '15.6" 4K UHD+ Touch',
    specs: {
      processor: "Intel Core i9-10885H",
      ram: "64GB DDR4",
      storage: "2TB NVMe SSD",
      screen: '15.6" 4K UHD+ Touch'
    }
  },
  {
    id: "surface-pro",
    name: "Microsoft Surface Pro",
    category: "Ultra-portable",
    price: 895,
    originalPrice: 1499,
    // Asegúrate de crear la carpeta public/products/surface-pro y meter un hero.webp ahí
    image: "/products/surface-pro/hero.webp",
    images: [
      "/products/surface-pro/hero.webp"
    ],
    cpu: "Intel Core i7-1185G7",
    ram: "32GB LPDDR4x",
    storage: "1TB SSD",
    screen: '13" PixelSense Flow Display',
    specs: {
      processor: "Intel Core i7-1185G7",
      ram: "32GB LPDDR4x",
      storage: "1TB SSD",
      screen: '13" PixelSense'
    }
  }
];