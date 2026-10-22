export interface DemoCategory {
  _id: number;
  categoryName: string;
  image: string;
}

export interface DemoBrand {
  _id: number;
  brandName: string;
}

export interface DemoImage {
  imageId: number;
  imageUrl: string;
  isDefault: boolean;
}

export interface DemoVariation {
  _id: number;
  attributeName: string;
  attributeValue: string;
  price: number;
  quantity: number;
}

export interface DemoProduct {
  _id: number;
  productName: string;
  description: string;
  price: number;
  discount: number;
  stock: number;
  sold: number;
  avgRating: number;
  reviewCount: number;
  category: DemoCategory;
  brand: DemoBrand;
  images: DemoImage[];
  variations: DemoVariation[];
  isNewProduct: boolean;
  isSale: boolean;
  isSpecial: boolean;
  createdAt: string;
}

export const DEMO_IMAGES = {
  img1: "https://noithatmanhhe.vn/media/27034/12-ke-tivi-phong-cach-tan-co-dien.jpg",
  img2: "https://lingdecor.com/wp-content/uploads/2020/09/mua-do-trang-tri-nha-o-dau16.jpg",
  img3: "https://static-images.vnncdn.net/files/publish/2022/8/12/can-ho-658.jpg",
  img4: "https://hoanmydecor.vn/wp-content/uploads/2022/09/banner-hoanmydecor-8.jpg",
  img5: "https://hoanmydecor.vn/wp-content/uploads/2022/09/banner-hoanmydecor-7.jpg",
  img6: "https://www.lanha.vn/wp-content/uploads/2023/10/decor-la-gi-10.jpg.webp",
};

export const MOCK_CATEGORIES: DemoCategory[] = [
  {
    _id: 1,
    categoryName: "Lọ hoa - Bình hoa",
    image: DEMO_IMAGES.img2,
  },
  {
    _id: 2,
    categoryName: "Khung ảnh",
    image: DEMO_IMAGES.img6,
  },
  {
    _id: 3,
    categoryName: "Khay - Đĩa",
    image: DEMO_IMAGES.img5,
  },
  {
    _id: 4,
    categoryName: "Đèn trang trí",
    image: DEMO_IMAGES.img4,
  },
  {
    _id: 5,
    categoryName: "Kệ - Tủ trang trí",
    image: DEMO_IMAGES.img1,
  },
  {
    _id: 6,
    categoryName: "Decor phòng khách",
    image: DEMO_IMAGES.img3,
  },
];

export const MOCK_BRANDS: DemoBrand[] = [
  { _id: 1, brandName: "Mạnh Hệ" },
  { _id: 2, brandName: "Ling Decor" },
  { _id: 3, brandName: "Hoàn Mỹ Decor" },
  { _id: 4, brandName: "Lanha" },
  { _id: 5, brandName: "VNN Home" },
];

const C = {
  vase: MOCK_CATEGORIES[0],
  frame: MOCK_CATEGORIES[1],
  tray: MOCK_CATEGORIES[2],
  light: MOCK_CATEGORIES[3],
  shelf: MOCK_CATEGORIES[4],
  living: MOCK_CATEGORIES[5],
};

const B = {
  manhHe: MOCK_BRANDS[0],
  ling: MOCK_BRANDS[1],
  hoanMy: MOCK_BRANDS[2],
  lanha: MOCK_BRANDS[3],
  vnn: MOCK_BRANDS[4],
};

export const MOCK_PRODUCTS: DemoProduct[] = [
  {
    _id: 101,
    productName: "Kệ TV Tân Cổ Điển Gỗ Sồi",
    description:
      "<p>Kệ TV phong cách tân cổ điển, hoàn thiện bề mặt chống trầy và dễ vệ sinh.</p><p>Phù hợp phòng khách 15-25m2.</p>",
    price: 7900000,
    discount: 12,
    stock: 6,
    sold: 52,
    avgRating: 4.8,
    reviewCount: 24,
    category: C.shelf,
    brand: B.manhHe,
    images: [
      { imageId: 1, imageUrl: DEMO_IMAGES.img1, isDefault: true },
      { imageId: 2, imageUrl: DEMO_IMAGES.img3, isDefault: false },
    ],
    variations: [
      {
        _id: 1001,
        attributeName: "Kích thước",
        attributeValue: "1m6",
        price: 7900000,
        quantity: 4,
      },
      {
        _id: 1002,
        attributeName: "Kích thước",
        attributeValue: "1m8",
        price: 8600000,
        quantity: 2,
      },
    ],
    isNewProduct: false,
    isSale: true,
    isSpecial: true,
    createdAt: "2026-03-20T00:00:00.000Z",
  },
  {
    _id: 102,
    productName: "Bình Hoa Gốm Tối Giản",
    description:
      "<p>Bình hoa gốm men mờ, tông trung tính, phù hợp nhiều phong cách nội thất.</p>",
    price: 590000,
    discount: 0,
    stock: 14,
    sold: 120,
    avgRating: 4.6,
    reviewCount: 31,
    category: C.vase,
    brand: B.ling,
    images: [
      { imageId: 3, imageUrl: DEMO_IMAGES.img2, isDefault: true },
      { imageId: 4, imageUrl: DEMO_IMAGES.img6, isDefault: false },
    ],
    variations: [],
    isNewProduct: true,
    isSale: false,
    isSpecial: true,
    createdAt: "2026-03-28T00:00:00.000Z",
  },
  {
    _id: 103,
    productName: "Khung Ảnh Gỗ Treo Tường",
    description:
      "<p>Bộ 3 khung ảnh gỗ MDF chống ẩm, dễ phối tranh và ảnh gia đình.</p>",
    price: 450000,
    discount: 5,
    stock: 20,
    sold: 88,
    avgRating: 4.4,
    reviewCount: 18,
    category: C.frame,
    brand: B.hoanMy,
    images: [
      { imageId: 5, imageUrl: DEMO_IMAGES.img6, isDefault: true },
      { imageId: 6, imageUrl: DEMO_IMAGES.img4, isDefault: false },
    ],
    variations: [],
    isNewProduct: false,
    isSale: true,
    isSpecial: false,
    createdAt: "2026-02-11T00:00:00.000Z",
  },
  {
    _id: 104,
    productName: "Khay Decor Gỗ Óc Chó",
    description:
      "<p>Khay decor dùng cho bàn trà hoặc kệ trang trí, chất liệu gỗ tự nhiên.</p>",
    price: 390000,
    discount: 0,
    stock: 30,
    sold: 65,
    avgRating: 4.3,
    reviewCount: 11,
    category: C.tray,
    brand: B.lanha,
    images: [
      { imageId: 7, imageUrl: DEMO_IMAGES.img5, isDefault: true },
      { imageId: 8, imageUrl: DEMO_IMAGES.img2, isDefault: false },
    ],
    variations: [],
    isNewProduct: true,
    isSale: false,
    isSpecial: false,
    createdAt: "2026-04-01T00:00:00.000Z",
  },
  {
    _id: 105,
    productName: "Đèn Bàn Decor Phòng Khách",
    description:
      "<p>Đèn bàn ánh sáng vàng ấm, tạo điểm nhấn không gian phòng khách.</p>",
    price: 1290000,
    discount: 15,
    stock: 9,
    sold: 43,
    avgRating: 4.7,
    reviewCount: 26,
    category: C.light,
    brand: B.hoanMy,
    images: [
      { imageId: 9, imageUrl: DEMO_IMAGES.img4, isDefault: true },
      { imageId: 10, imageUrl: DEMO_IMAGES.img3, isDefault: false },
    ],
    variations: [
      {
        _id: 1003,
        attributeName: "Màu",
        attributeValue: "Đen nhám",
        price: 1290000,
        quantity: 5,
      },
      {
        _id: 1004,
        attributeName: "Màu",
        attributeValue: "Trắng kem",
        price: 1290000,
        quantity: 4,
      },
    ],
    isNewProduct: false,
    isSale: true,
    isSpecial: true,
    createdAt: "2026-02-22T00:00:00.000Z",
  },
  {
    _id: 106,
    productName: "Set Trang Trí Căn Hộ Hiện Đại",
    description:
      "<p>Combo decor gồm tranh, lọ hoa và phụ kiện nhỏ cho căn hộ hiện đại.</p>",
    price: 2190000,
    discount: 8,
    stock: 12,
    sold: 39,
    avgRating: 4.5,
    reviewCount: 15,
    category: C.living,
    brand: B.vnn,
    images: [
      { imageId: 11, imageUrl: DEMO_IMAGES.img3, isDefault: true },
      { imageId: 12, imageUrl: DEMO_IMAGES.img5, isDefault: false },
    ],
    variations: [],
    isNewProduct: false,
    isSale: true,
    isSpecial: true,
    createdAt: "2026-01-14T00:00:00.000Z",
  },
  {
    _id: 107,
    productName: "Kệ Trang Trí Treo Tường 3 Tầng",
    description:
      "<p>Kệ treo tường tiết kiệm diện tích, phù hợp decor phòng ngủ và phòng khách.</p>",
    price: 990000,
    discount: 0,
    stock: 18,
    sold: 77,
    avgRating: 4.4,
    reviewCount: 19,
    category: C.shelf,
    brand: B.manhHe,
    images: [
      { imageId: 13, imageUrl: DEMO_IMAGES.img1, isDefault: true },
      { imageId: 14, imageUrl: DEMO_IMAGES.img4, isDefault: false },
    ],
    variations: [],
    isNewProduct: true,
    isSale: false,
    isSpecial: false,
    createdAt: "2026-03-30T00:00:00.000Z",
  },
  {
    _id: 108,
    productName: "Bộ Khung Ảnh Bắc Âu",
    description:
      "<p>Bộ khung ảnh tông gỗ sáng, dễ phối cùng sofa và tường màu trung tính.</p>",
    price: 680000,
    discount: 10,
    stock: 15,
    sold: 59,
    avgRating: 4.2,
    reviewCount: 12,
    category: C.frame,
    brand: B.ling,
    images: [
      { imageId: 15, imageUrl: DEMO_IMAGES.img2, isDefault: true },
      { imageId: 16, imageUrl: DEMO_IMAGES.img6, isDefault: false },
    ],
    variations: [],
    isNewProduct: false,
    isSale: true,
    isSpecial: false,
    createdAt: "2025-12-28T00:00:00.000Z",
  },
  {
    _id: 109,
    productName: "Đĩa Gốm Trang Trí Bàn Ăn",
    description:
      "<p>Đĩa gốm men rạn thủ công, thích hợp trưng bày bàn ăn và kệ bếp.</p>",
    price: 320000,
    discount: 0,
    stock: 26,
    sold: 40,
    avgRating: 4.1,
    reviewCount: 9,
    category: C.tray,
    brand: B.hoanMy,
    images: [
      { imageId: 17, imageUrl: DEMO_IMAGES.img5, isDefault: true },
      { imageId: 18, imageUrl: DEMO_IMAGES.img4, isDefault: false },
    ],
    variations: [],
    isNewProduct: true,
    isSale: false,
    isSpecial: true,
    createdAt: "2026-03-25T00:00:00.000Z",
  },
  {
    _id: 110,
    productName: "Đèn Thả Trần Tối Giản",
    description:
      "<p>Đèn thả trần kiểu dáng hiện đại, phù hợp khu vực bàn ăn hoặc phòng khách.</p>",
    price: 2490000,
    discount: 7,
    stock: 7,
    sold: 29,
    avgRating: 4.6,
    reviewCount: 14,
    category: C.light,
    brand: B.lanha,
    images: [
      { imageId: 19, imageUrl: DEMO_IMAGES.img6, isDefault: true },
      { imageId: 20, imageUrl: DEMO_IMAGES.img3, isDefault: false },
    ],
    variations: [
      {
        _id: 1005,
        attributeName: "Kích thước",
        attributeValue: "40cm",
        price: 2490000,
        quantity: 5,
      },
      {
        _id: 1006,
        attributeName: "Kích thước",
        attributeValue: "55cm",
        price: 2890000,
        quantity: 2,
      },
    ],
    isNewProduct: false,
    isSale: true,
    isSpecial: false,
    createdAt: "2025-11-18T00:00:00.000Z",
  },
  {
    _id: 111,
    productName: "Bàn Console Decor Lối Vào",
    description:
      "<p>Bàn console nhỏ gọn cho khu vực sảnh vào, đi kèm ngăn kéo tiện lợi.</p>",
    price: 3590000,
    discount: 0,
    stock: 5,
    sold: 17,
    avgRating: 4.5,
    reviewCount: 7,
    category: C.living,
    brand: B.vnn,
    images: [
      { imageId: 21, imageUrl: DEMO_IMAGES.img3, isDefault: true },
      { imageId: 22, imageUrl: DEMO_IMAGES.img1, isDefault: false },
    ],
    variations: [],
    isNewProduct: false,
    isSale: false,
    isSpecial: true,
    createdAt: "2026-01-05T00:00:00.000Z",
  },
  {
    _id: 112,
    productName: "Tủ Trưng Bày Kính Khung Gỗ",
    description:
      "<p>Tủ trưng bày nhỏ gọn, phù hợp để sách, tượng hoặc vật phẩm decor.</p>",
    price: 5690000,
    discount: 9,
    stock: 8,
    sold: 22,
    avgRating: 4.7,
    reviewCount: 16,
    category: C.shelf,
    brand: B.manhHe,
    images: [
      { imageId: 23, imageUrl: DEMO_IMAGES.img1, isDefault: true },
      { imageId: 24, imageUrl: DEMO_IMAGES.img5, isDefault: false },
    ],
    variations: [],
    isNewProduct: false,
    isSale: true,
    isSpecial: true,
    createdAt: "2025-10-03T00:00:00.000Z",
  },
  {
    _id: 113,
    productName: "Lọ Hoa Thủy Tinh Trong Suốt",
    description:
      "<p>Lọ hoa thủy tinh dáng cao, phù hợp hoa tươi và hoa khô.</p>",
    price: 280000,
    discount: 0,
    stock: 22,
    sold: 101,
    avgRating: 4.3,
    reviewCount: 28,
    category: C.vase,
    brand: B.ling,
    images: [
      { imageId: 25, imageUrl: DEMO_IMAGES.img2, isDefault: true },
      { imageId: 26, imageUrl: DEMO_IMAGES.img4, isDefault: false },
    ],
    variations: [],
    isNewProduct: true,
    isSale: false,
    isSpecial: false,
    createdAt: "2026-04-02T00:00:00.000Z",
  },
  {
    _id: 114,
    productName: "Khung Ảnh Đứng Bàn Làm Việc",
    description:
      "<p>Khung ảnh để bàn viền kim loại sơn tĩnh điện, bền và sang trọng.</p>",
    price: 210000,
    discount: 0,
    stock: 40,
    sold: 132,
    avgRating: 4.1,
    reviewCount: 10,
    category: C.frame,
    brand: B.hoanMy,
    images: [
      { imageId: 27, imageUrl: DEMO_IMAGES.img6, isDefault: true },
      { imageId: 28, imageUrl: DEMO_IMAGES.img2, isDefault: false },
    ],
    variations: [],
    isNewProduct: true,
    isSale: false,
    isSpecial: false,
    createdAt: "2026-03-15T00:00:00.000Z",
  },
  {
    _id: 115,
    productName: "Set Khay Nến Trang Trí",
    description:
      "<p>Set khay nến decor bàn trà, tạo điểm nhấn ấm cúng cho không gian sống.</p>",
    price: 470000,
    discount: 6,
    stock: 16,
    sold: 49,
    avgRating: 4.4,
    reviewCount: 13,
    category: C.tray,
    brand: B.lanha,
    images: [
      { imageId: 29, imageUrl: DEMO_IMAGES.img5, isDefault: true },
      { imageId: 30, imageUrl: DEMO_IMAGES.img3, isDefault: false },
    ],
    variations: [],
    isNewProduct: false,
    isSale: true,
    isSpecial: true,
    createdAt: "2026-02-05T00:00:00.000Z",
  },
  {
    _id: 116,
    productName: "Combo Decor Phòng Khách Sang Trọng",
    description:
      "<p>Combo gồm đèn, tranh và phụ kiện trang trí theo tông hiện đại.</p>",
    price: 4990000,
    discount: 11,
    stock: 4,
    sold: 14,
    avgRating: 4.9,
    reviewCount: 8,
    category: C.living,
    brand: B.vnn,
    images: [
      { imageId: 31, imageUrl: DEMO_IMAGES.img3, isDefault: true },
      { imageId: 32, imageUrl: DEMO_IMAGES.img1, isDefault: false },
    ],
    variations: [
      {
        _id: 1007,
        attributeName: "Gói",
        attributeValue: "Cơ bản",
        price: 4990000,
        quantity: 3,
      },
      {
        _id: 1008,
        attributeName: "Gói",
        attributeValue: "Nâng cao",
        price: 5890000,
        quantity: 1,
      },
    ],
    isNewProduct: false,
    isSale: true,
    isSpecial: true,
    createdAt: "2025-09-09T00:00:00.000Z",
  },
];

const cloneCategory = (category: DemoCategory): DemoCategory => ({ ...category });
const cloneBrand = (brand: DemoBrand): DemoBrand => ({ ...brand });
const cloneImage = (image: DemoImage): DemoImage => ({ ...image });
const cloneVariation = (variation: DemoVariation): DemoVariation => ({
  ...variation,
});

const cloneProduct = (product: DemoProduct): DemoProduct => ({
  ...product,
  category: cloneCategory(product.category),
  brand: cloneBrand(product.brand),
  images: product.images.map(cloneImage),
  variations: product.variations.map(cloneVariation),
});

export const getMockCategories = (): DemoCategory[] =>
  MOCK_CATEGORIES.map(cloneCategory);

export const getMockBrands = (): DemoBrand[] => MOCK_BRANDS.map(cloneBrand);

export const getMockProducts = (): DemoProduct[] => MOCK_PRODUCTS.map(cloneProduct);
