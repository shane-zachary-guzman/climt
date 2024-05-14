#! /usr/bin/env node

import * as YAML from 'yaml';
import * as fs from 'fs';
const args = require('args-parser')(process.argv);

const file = fs.readFileSync('test_input.yaml', 'utf-8');
const test = YAML.parse(file);
console.info(args);