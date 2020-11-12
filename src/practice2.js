const compare = (object1, object2) => {
  const x = object1.index;
  const y = object2.index;
  if (x > y) {
    return -1;
  } else if (x < y) {
    return 1;
  } else {
    return 0;
  }
};
const inject = (items, sections) => {
  sections.sort(compare);
  for (const section of sections) {
    const { content, index } = section;
    items.splice(index, 0, content);
  }
  return items;
};
export { inject };
