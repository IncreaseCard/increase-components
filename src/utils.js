export const groupBy = (list, keyGetter) => {
  return list.reduce((acc, element) => {
    (acc[keyGetter(element)] = acc[keyGetter(element)] || []).push(element);
    return acc;
  }, {});
};
