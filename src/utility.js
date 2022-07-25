import { cwd } from 'node:process';
import { resolve } from 'path';
import * as path from 'path';
import { readFileSync } from 'node:fs';
import _ from 'lodash';

export const getPath = (file) => resolve(cwd(), file);

export const readFile = (file) => readFileSync(getPath(file), 'utf-8');

export const sortUnionArrays = (arr1, arr2) => _.sortBy(_.union(arr1, arr2));

export const getFileName = (file) => path.extname(file).slice(1);

export const makeIndent = (depth, replacer = ' ', spacesCount = 4) => replacer.repeat(depth * spacesCount - 2);
