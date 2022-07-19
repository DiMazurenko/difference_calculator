import _ from 'lodash';

export default (keys, objOne, objTwo) => {
  const result = keys.reduce((acc, key) => {
    const value1 = objOne[key];
    const value2 = objTwo[key];
    let ac = acc;

    if (_.has(objOne, key) && !_.has(objTwo, key)) {
      ac = `${acc}
      - ${key}:${value1}`;
    }
    if (!_.has(objOne, key) && _.has(objTwo, key)) {
      ac = `${acc}
      + ${key}:${value2}`;
    }
    if (_.has(objOne, key) && _.has(objTwo, key) && value1 === value2) {
      ac = `${acc}
        ${key}:${value1}`;
    }
    if (_.has(objOne, key) && _.has(objTwo, key) && value1 !== value2) {
      ac = `${acc}
      - ${key}:${value1}
      + ${key}:${value2}`;
    }
    return ac;
  }, '');
  return result;
};
