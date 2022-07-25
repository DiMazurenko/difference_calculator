import { readFile, getFileName } from './utility.js';
import getTree from './tree.js';
import parse from './parsers.js';
import getFormat from './formatters/index.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const fileNameFilepath1 = getFileName(filepath1);
  const fileNameFilepath2 = getFileName(filepath2);

  const firstData = readFile(filepath1);
  const secondData = readFile(filepath2);

  const objOne = parse(firstData, fileNameFilepath1);
  const objTwo = parse(secondData, fileNameFilepath2);

  const tree = getTree(objOne, objTwo);

  const result = getFormat(tree, formatName);

  return result;
};

export default genDiff;
