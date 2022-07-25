import _ from 'lodash';
import { makeIndent } from '../utility.js';

export default (tree) => {
  const newValue = (value, depth = 1) => {
    if (!_.isPlainObject(value)) {
      return `${value}`;
    }

    const keys = Object.keys(value);
    const result = keys.map((key) => {
      const pare = value[key];
      return `${makeIndent(depth + 1)}  ${key}: ${newValue(pare, depth + 1)}`;
    });

    return `{\n${result.join('\n')}\n  ${makeIndent(depth)}}`;
  };

  const iter = (node, depth = 0) => {
    const {
      key, value, type, children, value1, value2
    } = node;

    switch (type) {
      case 'root': {
        const newChildren = children.flatMap((child) => iter(child, depth + 1));
        return `{\n${newChildren.join('\n')}\n}`;
      }

      case 'parent': {
        const newChildren = children.flatMap((child) => iter(child, depth + 1));
        return `${makeIndent(depth)}  ${key}: {\n${newChildren.join(
          '\n'
        )}\n${makeIndent(depth)}  }`;
      }

      case 'added': {
        return `${makeIndent(depth)}+ ${key}: ${newValue(value, depth)}`;
      }

      case 'deleted': {
        return `${makeIndent(depth)}- ${key}: ${newValue(value, depth)}`;
      }

      case 'changed': {
        const firstElement = `${makeIndent(depth)}- ${key}: ${newValue(
          value1,
          depth
        )}`;
        const secondElement = `${makeIndent(depth)}+ ${key}: ${newValue(
          value2,
          depth
        )}`;
        return `${firstElement}\n${secondElement}`;
      }

      case 'unchanged': {
        return `${makeIndent(depth)}  ${key}: ${newValue(value, depth)}`;
      }

      default:
        throw new Error(`Unknown type: '${type}' of node!`);
    }
  };

  return iter(tree);
};
