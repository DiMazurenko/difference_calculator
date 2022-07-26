import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import genDiff from '../src/index.js';
import { readFile } from '../src/utility.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('genDiff file:json formst:stylish', () => {
  const path1 = `${__dirname}/../__fixtures__/file1.json`;
  const path2 = `${__dirname}/../__fixtures__/file2.json`;
  const result = readFile(`${__dirname}/../__fixtures__/result_Stylish`);
  expect(genDiff(path1, path2, 'stylish')).toEqual(result);
});

test('genDiff file:yaml format:stylish', () => {
  const path1 = `${__dirname}/../__fixtures__/file1.yaml`;
  const path2 = `${__dirname}/../__fixtures__/file2.yml`;
  const result = readFile(`${__dirname}/../__fixtures__/result_Stylish`);
  expect(genDiff(path1, path2, 'stylish')).toEqual(result);
});

test('genDiff file:json format:plain', () => {
  const path1 = `${__dirname}/../__fixtures__/file1.json`;
  const path2 = `${__dirname}/../__fixtures__/file2.json`;
  const result = readFile(`${__dirname}/../__fixtures__/result_Plain`);
  expect(genDiff(path1, path2, 'plain')).toEqual(result);
});

test('genDiff file:yaml format:plain', () => {
  const path1 = `${__dirname}/../__fixtures__/file1.yaml`;
  const path2 = `${__dirname}/../__fixtures__/file2.yml`;
  const result = readFile(`${__dirname}/../__fixtures__/result_Plain`);
  expect(genDiff(path1, path2, 'plain')).toEqual(result);
});

test('genDiff file:json format:json', () => {
  const path1 = `${__dirname}/../__fixtures__/file1.json`;
  const path2 = `${__dirname}/../__fixtures__/file2.json`;
  const result = readFile(`${__dirname}/../__fixtures__/result_JSON`);
  expect(genDiff(path1, path2, 'json')).toEqual(result);
});

test('genDiff file:yaml format:json', () => {
  const path1 = `${__dirname}/../__fixtures__/file1.yaml`;
  const path2 = `${__dirname}/../__fixtures__/file2.yml`;
  const result = readFile(`${__dirname}/../__fixtures__/result_JSON`);
  expect(genDiff(path1, path2, 'json')).toEqual(result);
});

test('genDiff wrong result file:json format:stylish', () => {
  const path1 = `${__dirname}/../__fixtures__/file1.json`;
  const path2 = `${__dirname}/../__fixtures__/file2.json`;
  const result = readFile(`${__dirname}/../__fixtures__/wrong_result_Stylish`);
  expect(genDiff(path1, path2)).not.toEqual(result);
});

test('genDiff wrong filename file:json format:stylish', () => {
  const path1 = `${__dirname}/../__fixtures__/file1.json`;
  const path2 = `${__dirname}/../__fixtures__/file.txt`;
  const filename = 'txt';
  expect(() => genDiff(path1, path2)).toThrow(`Unknown filename: '${filename}'!`);
});

test('genDiff wrong format file:json format:stylish', () => {
  const path1 = `${__dirname}/../__fixtures__/file1.json`;
  const path2 = `${__dirname}/../__fixtures__/file2.json`;
  const formatName = 'yaml';
  expect(() => genDiff(path1, path2, formatName)).toThrow(`Unknown format: '${formatName}'!`);
});
