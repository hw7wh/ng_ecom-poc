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
          '',
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
    colors: ['Navy','Evergreen']
  }
]

