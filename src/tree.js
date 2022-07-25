import _ from 'lodash';
import { sortUnionArrays } from './utility.js';

const tree = (objOne, objTwo) => {
  const keysObjOne = Object.keys(objOne);
  const keysObjTwo = Object.keys(objTwo);

  const sortKeys = sortUnionArrays(keysObjOne, keysObjTwo);

  const result = sortKeys.map((key) => {
    const value1 = objOne[key];
    const value2 = objTwo[key];

    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return {
        key,
        type: 'parent',
        children: tree(value1, value2),
      };
    }

    if (!_.has(objOne, key)) {
      return {
        key,
        type: 'added',
        value: value2,
      };
    }

    if (!_.has(objTwo, key)) {
      return {
        key,
        type: 'deleted',
        value: value1,
      };
    }

    if (value1 !== value2) {
      return {
        key,
        type: 'changed',
        value1,
        value2,
      };
    }

    return {
      key,
      type: 'unchanged',
      value1,
    };
  });

  return result;
};

const getTree = (objOne, objTwo) => ({
  type: 'root',
  children: tree(objOne, objTwo),
});

export default getTree;
