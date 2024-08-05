export const CategoryType = {
  Personal: 'personal',
  Career: 'career',
  Culture: 'culture',
} as const;
export type CategoryType = (typeof CategoryType)[keyof typeof CategoryType];
