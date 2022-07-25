import makeStylish from './stylish.js';
import makePlain from './plain.js';

export default (tree, formatName) => {
  switch (formatName) {
    case 'stylish': {
      return makeStylish(tree);
    }
    case 'plain': {
      return makePlain(tree);
    }
    default:
      return console.log('wrooong');
  }
};
