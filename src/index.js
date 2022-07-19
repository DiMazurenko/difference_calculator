import { readFile, sortUnionArrays } from './utility.js';
import getComparison from './comparison.js';

const genDiff = (filepath1, filepath2) => {
  const firstData = readFile(filepath1);
  const secondData = readFile(filepath2);

  const objOne = JSON.parse(firstData);
  const objTwo = JSON.parse(secondData);

  const keysObjOne = Object.keys(objOne);
  const keysObjTwo = Object.keys(objTwo);

  const sortKeys = sortUnionArrays(keysObjOne, keysObjTwo);

  const comparisonObj = getComparison(sortKeys, objOne, objTwo);

  const result = `{${comparisonObj}
}`;

  return result;
};

export default genDiff;
