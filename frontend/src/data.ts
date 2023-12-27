import { SubcategoryName } from './app/shared/types/subcategory-name.type';
import { Sex } from "./app/shared/enums/sex.enum"
import { Product } from "./app/shared/models/Product"
import { CategoriesBySex } from "./app/shared/records/categories-by-sex.record"
import { Size } from './app/shared/enums/size.enum';

export const sample_foods: Product[] = [
  {
    id : '1',
    name: 'RecTrek Pant',
    description: 'Our most versatile pant. Relaxed fit and slightly cropped. Made in durable, elements-resistant RecTrek fabric for comfort and mobility.',
    imageUrls: [
      {
        color:'Navy',
        imageUrls: [
          'https://cdn.ov.app/media/products/rectrek-pant/navy/M701345-DCW-NVY_RecTrek_Pant_Navy_069_EXP240615_uliWBkA.jpg',
          'https://cdn.ov.app/media/products/rectrek-pant/navy/M701345-DCW-NVY_RecTrek_Pant_Navy_059_EXP240615.jpg',
          'https://cdn.ov.app/media/products/rectrek-pant/navy/M701345-DCW-NVY_RecTrek_Pant_Navy_030_EXP240615.jpg',
          'https://cdn.ov.app/media/products/rectrek-pant/navy/M701345-DCW-NVY_RecTrek_Pant_Navy_011_EXP240615.jpg'
        ]
      },
      {
        color:'Balsam Green',
        imageUrls: [
          'https://cdn.ov.app/media/products/rectrek-pant/balsam-green/M701345-DCW-BMG_RecTrek_Pant_Balsam_Green_021_EXP240907_kWB5BE5.jpg',
          'https://cdn.ov.app/media/products/rectrek-pant/balsam-green/M701345-DCW-BMG_RecTrek_Pant_Balsam_Green_053_EXP240907.jpg',
          'https://cdn.ov.app/media/products/rectrek-pant/balsam-green/M701345-DCW-BMG_RecTrek_Pant_Balsam_Green_046_EXP240907.jpg',
          'https://cdn.ov.app/media/products/rectrek-pant/balsam-green/M701345-DCW-BMG_RecTrek_Pant_Balsam_Green_016_EXP240907.jpg',
        ]
      }
    ],
    stars: 5,
    sales: false,
    price: 98,
    sex: Sex.Men,
    category: 'Top',
    favorite: false,
    sizes: [Size.S,Size.L],
    colors: ['Navy','Balsam Green']
  },
  {
    id : '2',
    name: 'CloudKnit Longsleeve',
    description: 'The softest longsleeve tee you will ever wear. Made in lightweight, crazy-soft CloudKnit with a classic fit.',
    imageUrls: [
      {
        color:'Charcoal',
        imageUrls: [
          'https://cdn.ov.app/media/products/cloudknit-longsleeve/charcoal/M301351-HLM-CHR_CloudKnit_Longsleeve_Charcoal_FRONT_559_EXP241109.jpg',
          'https://cdn.ov.app/media/products/cloudknit-longsleeve/charcoal/M301351-HLM-CHR_CloudKnit_Longsleeve_Charcoal_RESHOOT_002_EXP241109.jpg',
          'https://cdn.ov.app/media/products/cloudknit-longsleeve/charcoal/M301351-HLM-CHR_CloudKnit_Longsleeve_Charcoal_RESHOOT_056_EXP241109.jpg',
          'https://cdn.ov.app/media/products/cloudknit-longsleeve/charcoal/M301351-HLM-CHR_CloudKnit_Longsleeve_Charcoal_RESHOOT_084_EXP241109.jpg'
        ]
      }
    ],
    stars: 5,
    sales: false,
    price: 68,
    sex: Sex.Men,
    category: 'Top',
    favorite: false,
    sizes: [Size.XS,Size.M],
    colors: ['Charcoal','Evergreen']
  },
]

