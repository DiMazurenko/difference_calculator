import makeStylish from './stylish.js';
import makePlain from './plain.js';
import makeJSON from './json.js';

export default (tree, formatName) => {
  switch (formatName) {
    case 'stylish': {
      return makeStylish(tree);
    }
    case 'plain': {
      return makePlain(tree);
    }
    case 'json': {
      return makeJSON(tree);
    }
    default:
      return console.log('wrooong');
  }
};
