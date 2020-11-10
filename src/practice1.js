const parseData = (input) => {
  const { data, column } = input;
  let output = [];
  for (let i = 0; i < data.length; i++) {
    let dataInfo = data[i];
    let outputValue = {};
    for (let j = 0; j < column.length; j++) {
      outputValue[column[j].name] = dataInfo[j];
    }
    output.push(outputValue);
  }
  return output;
};
export { parseData };
