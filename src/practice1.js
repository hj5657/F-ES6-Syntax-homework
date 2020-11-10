const parseData = (input) => {
  const { data, column } = input;
  let output = [];
  for (const dataInfo of data) {
    let outputValue = {};
    let index = 0;
    for (const columnInfo of column) {
      outputValue[columnInfo.name] = dataInfo[index];
      index++;
    }
    output.push(outputValue);
  }
  return output;
};
export { parseData };
