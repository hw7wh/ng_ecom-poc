import { Sex } from '../enums/sex.enum';
import { CollectionBySex } from '../records/collections-by-sex.record';

export type CollectionName = {
  [K in Sex]: typeof CollectionBySex[K][number]['name']
}[Sex];
