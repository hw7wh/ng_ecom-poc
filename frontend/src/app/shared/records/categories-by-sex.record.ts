import { Sex } from "../enums/sex.enum";
import { CategoryDetails } from "../interfaces/category-details.interface";

// Define a map where keys are Sex and values are arrays of CategoryDetails
export const CategoriesBySex: Record<Sex, CategoryDetails[]> = {
  [Sex.Men]: [
    { name: 'Pants', subcategories: ['Relaxed', 'Zipp-Off']},
    { name: 'Shorts' },
    { name: 'Tops', subcategories: ['2nd Layer', 'Longsleeve', 'Shortsleeve', 'Tanks'] },
    { name: 'Sweatshirts & Jackets', subcategories: ['2nd Layer', 'Outerwear'] },
    { name: 'Shoes & Accessories', subcategories: ['Footwear', 'Headwear', 'Socks'] },
    // ... other categories for men
  ],
  [Sex.Women]: [
    { name: 'Dresses' },
    { name: 'Pants' },
    { name: 'Sweatshirts & Jackets', subcategories: ['2nd Layer','Longsleeve', 'Outerwear'] },
    { name: 'Tops & Tanks', subcategories: ['Bras', 'Longsleeve', 'Shortsleeve', 'Tanks'] },
    { name: 'Shorts & Skorts', subcategories: ['Dresses','Shorts', 'Skorts/Skirts','Tanks'] },
    { name: 'Bras', subcategories: ['Bras','Tanks'] },
    { name: 'Leggings'},
    { name: 'Shoes & Accessories', subcategories: ['Footwear', 'Headwear', 'Socks'] },
    // ... other categories for women
  ],
};
