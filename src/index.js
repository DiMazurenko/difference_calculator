import { cwd } from 'node:process';
import { resolve } from 'path';
import { readFileSync } from 'node:fs';
import _ from 'lodash';

const genDiff = (filepath1, filepath2) => {
  const getPath = (path) => resolve(cwd(), path);
  const firstPath = getPath(filepath1);
  const secondPath = getPath(filepath2);

  const firstData = readFileSync(firstPath, 'utf-8');
  const secondData = readFileSync(secondPath, 'utf-8');

  const objOne = JSON.parse(firstData);
  const objTwo = JSON.parse(secondData);

  const keys = _.sortBy(_.union(Object.keys(objOne), Object.keys(objTwo)));

  const cb = (acc, key) => {
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
  };

  const result = keys.reduce(cb, '');
  const formatResult = `{${result}
}`;

  return formatResult;
};

export default genDiff;
