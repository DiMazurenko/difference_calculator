import { readFile, sortUnionArrays, getFileName } from './utility.js';
import getComparison from './comparison.js';
import parse from './parsers.js';

const genDiff = (filepath1, filepath2) => {
  const firstData = readFile(filepath1);
  const secondData = readFile(filepath2);

  const fileNameFilepath1 = getFileName(filepath1);
  const fileNameFilepath2 = getFileName(filepath2);

  const objOne = parse(firstData, fileNameFilepath1);
  const objTwo = parse(secondData, fileNameFilepath2);

  const keysObjOne = Object.keys(objOne);
  const keysObjTwo = Object.keys(objTwo);

  const sortKeys = sortUnionArrays(keysObjOne, keysObjTwo);

  const comparisonObj = getComparison(sortKeys, objOne, objTwo);

  const result = `{${comparisonObj}
}`;

  return result;
};

export default genDiff;
