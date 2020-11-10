const inject = (items, sections) => {
  let flag = 0;
  for (const section of sections) {
    const { content, index } = section;
    items.splice(index + flag, 0, content);
    flag++;
  }
  return items;
};
export { inject };
