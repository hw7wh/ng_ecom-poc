import { Fabric } from '../enums/fabric.enum';
import { Sex } from '../enums/sex.enum';
import { Size } from '../enums/size.enum';
import { Tag } from '../enums/tag.enum';
import { CategoryName } from '../types/category-name.type';
import { SubcategoryName } from '../types/subcategory-name.type';

export class Product {
  id!: string;
  name!: string;
  description!: string;
  imageUrls!: string[];
  stars!: number;
  sales!:boolean;
  promo?:number; // 15%, 20%
  price!: number;


  sex!: Sex; // enum : men, women
  category!: CategoryName;
  subcategory!: SubcategoryName;
  tags?: Tag[]; // new arrivals (newest), top rated, featured

  favorite!: boolean;

  sizes!: Size[]; //For example, ['S', 'M', 'L', 'XL']
  colors!: string[]; // For example, ['#FFFFFF', '#000000']
  fabric?: Fabric;
}
