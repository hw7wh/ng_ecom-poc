import { Sex } from '../enums/sex.enum';
import { CategoriesBySex } from '../records/categories-by-sex.record';

export type CategoryName = {
  [K in Sex]: typeof CategoriesBySex[K][number]['name']
}[Sex];
