const fs = require('fs');
const path = require('path');
const camelCase = require('lodash/camelCase');
const first = require('lodash/first');
const get = require('lodash/get');
const last = require('lodash/last');
const upperFirst = require('lodash/upperFirst');
const { parse } = require('svg-parser');

const upperCamelCase = (str) => upperFirst(camelCase(str));

// read input
const filepath = last(process.argv);
const name = first(path.parse(filepath).name.split('-'));
const upperName = upperCamelCase(name);

// parse SVG
const svg = fs.readFileSync(filepath, 'utf8');
const svgPaths = get(parse(svg), 'children[0].children', []);

let d;
if (svgPaths.length > 1) {
  d = last(svgPaths).properties.d;
}
if (svgPaths.length === 1) {
  d = first(svgPaths).properties.d;
}

// write output
const template = `import React from 'react';
import createSvgIcon from '../createSvgIcon';

export default createSvgIcon(
  <path d="${d}" />,
  '${upperName}'
);
`;

const outfile = path.join(__dirname, '../src/icons', `${upperName}.js`);
fs.writeFileSync(outfile, template);
