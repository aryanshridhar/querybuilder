import { Group } from 'react-dropdown';

const fieldItems: Group[] = [
  {
    type: 'group',
    name: 'PREDICTION',
    items: [
      { value: 'theme', label: 'Theme' },
      { value: 'subtheme', label: 'Sub-theme' },
      { value: 'reason', label: 'Reason' },
      { value: 'language', label: 'Language' },
      { value: 'source', label: 'Source' },
      { value: 'rating', label: 'Rating' },
      { value: 'timeperiod', label: 'Time Period' },
    ],
  },
  {
    type: 'group',
    name: 'COMMON',
    items: [{ value: 'customerid', label: 'Customer ID' }],
  },
];

const conditionItems: string[] = [
  'Equals',
  'Does not equal',
  'Like',
  'Not like',
  'Is Empty',
  'Is',
  'Is not',
];

const criteriaItems: string[] = ['Offers', 'Performance', 'Platform', 'Product Feedback'];
const subThemeItems: string[] = ['Subtheme#1', 'Subtheme#2', 'Subtheme#3', 'Subtheme#4'];
const reasonItems: string[] = ['Reason#1', 'Reason#2', 'Reason#3', 'Reason#4'];
const languageItems: string[] = ['Hindi', 'English', 'German', 'Greek'];
const sourceItems: string[] = ['Source#1', 'Source#2', 'Source#3', 'Source#4'];
const ratingItems: string[] = ['Excellent', 'Good', 'Bad', 'Worst'];
const timePeriodItems: string[] = ['1 day', '10 days', '21 days', '1 month'];
const customeridItems: string[] = ['CustomerID#1', 'CustomerID#2', 'CustomerID#3', 'CustomerID#4'];

const mappedObject: Record<string, string[]> = {
  theme: criteriaItems,
  subtheme: subThemeItems,
  reason: reasonItems,
  language: languageItems,
  source: sourceItems,
  rating: ratingItems,
  timeperiod: timePeriodItems,
  customerid: customeridItems,
};

const mappedFieldToCriteria = new Map<string, string[]>(Object.entries(mappedObject));

export { mappedFieldToCriteria, fieldItems, conditionItems, criteriaItems };
