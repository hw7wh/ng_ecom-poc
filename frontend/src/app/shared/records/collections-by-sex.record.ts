import { Sex } from '../enums/sex.enum';
import { CollectionDetails } from '../interfaces/collection-details.interface';

// Define a map where keys are Sex and values are arrays of CategoryDetails
export const CollectionBySex: Record<Sex, CollectionDetails[]> = {
  [Sex.Men]: [
    { name: 'Winter',},
    { name: 'Summer',}

    // ... other categories for men
  ],
  [Sex.Women]: [
    { name: 'Winter', },
    { name: 'Summer', }
    // ... other categories for women
  ],
};
