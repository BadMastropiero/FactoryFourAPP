import * as path from 'path';

const buildEslintCommand = (filenames) =>
  `eslint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, 'prettier --write --ignore-unknown'],
};