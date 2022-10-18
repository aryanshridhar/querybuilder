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

export { fieldItems, conditionItems, criteriaItems };
