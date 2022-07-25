import _ from 'lodash';

export default (tree) => {
  const newValue = (value) => {
    if (_.isPlainObject(value)) {
      return '[complex value]';
    }

    return typeof (value) === 'string' ? `'${value}'` : String(value);
  };

  const iter = (node, path = '') => {
    const {
      key, value, type, children, value1, value2,
    } = node;

    switch (type) {
      case 'root': {
        const newChildren = children.flatMap((child) => iter(child, key));
        return newChildren.join('\n');
      }

      case 'parent': {
        const newChildren = children.flatMap((child) => iter(child, `${path}${key}.`));
        return newChildren.join('\n');
      }

      case 'added': {
        return `Property '${path}${key}' was added with value: ${newValue(value)}`;
      }

      case 'deleted': {
        return `Property '${path}${key}' was removed`;
      }

      case 'changed': {
        return `Property '${path}${key}' was updated. From ${newValue(value1)} to ${newValue(value2)}`;
      }

      case 'unchanged': {
        return [];
      }

      default:
        throw new Error(`Unknown type: '${type}' of node!`);
    }
  };

  return iter(tree);
};
