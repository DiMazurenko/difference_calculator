export default (tree, spacesCount = 2) => JSON.stringify(tree, null, ' '.repeat(spacesCount));
