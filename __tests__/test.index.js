import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import genDiff from '../src/index.js';
import { readFile } from '../src/utility.js';

test('genDiff json', () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const path1 = `${__dirname}/../__fixtures__/file1.json`;
  const path2 = `${__dirname}/../__fixtures__/file2.json`;
  const result = readFile(`${__dirname}/../__fixtures__/result_Stylish`);
  expect(genDiff(path1, path2)).toEqual(result);
});

test('genDiff yaml', () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const path1 = `${__dirname}/../__fixtures__/file1.yaml`;
  const path2 = `${__dirname}/../__fixtures__/file2.yml`;
  const result = readFile(`${__dirname}/../__fixtures__/result_Stylish`);
  expect(genDiff(path1, path2)).toEqual(result);
});
