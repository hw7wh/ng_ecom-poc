import { Sex } from "../enums/sex.enum";
import { CategoryDetails } from "../interfaces/category-details.interface";

// Define a map where keys are Sex and values are arrays of CategoryDetails
export const CategoriesBySex: Record<Sex, CategoryDetails[]> = {
  [Sex.Men]: [
    { name: 'Shirts', subcategories: ['Casual', 'Formal', 'T-Shirts'] },
    // ... other categories for men
  ],
  [Sex.Women]: [
    { name: 'Dresses', subcategories: ['Evening', 'Casual', 'Cocktail'] },
    // ... other categories for women
  ],
};
