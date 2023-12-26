import { CategoryName } from "../types/category-name.type";
import { SubcategoryName } from "../types/subcategory-name.type";

export interface CollectionDetails {
  name: string;
  categories?: CategoryName[];
  subcategories?: SubcategoryName[];
}
