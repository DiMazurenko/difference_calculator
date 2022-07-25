import { load } from 'js-yaml';

const parse = (data, formatName) => {
  switch (formatName) {
    case 'json':
      return JSON.parse(data);
    case 'yaml':
      return load(data);
    case 'yml':
      return load(data);
    default:
      throw new Error(`Unknown filename: '${formatName}'!`);
  }
};

export default parse;
