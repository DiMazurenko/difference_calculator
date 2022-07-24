import { load } from 'js-yaml';

const parse = (data, fileName) => {
  switch (fileName) {
    case 'json':
      return JSON.parse(data);
    case 'yaml':
      return load(data);
    case 'yml':
      return load(data);
    default:
      return console.log('wrooong');
  }
};

export default parse;
