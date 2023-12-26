import { Sex } from '../enums/sex.enum';
import { CategoriesBySex } from '../records/categories-by-sex.record';

export type SubcategoryName = {
  [K in Sex]: typeof CategoriesBySex[K][number]['subcategories']
}[Sex];
