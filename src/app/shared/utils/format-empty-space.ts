export const formatEmptySpaceString = (string: string, lowerCase: boolean): string => {
  if (lowerCase) return string.replace(/\s/g, '').toLowerCase()
  return string.replace(/\s/g, '')
};
