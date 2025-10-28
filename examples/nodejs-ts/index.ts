/**
 * Node.js TypeScript Example for tld-parse
 *
 * This script demonstrates how to use the `tld-parse` library in a modern Node.js
 * TypeScript environment, using ES Modules.
 * It shows how to load the Public Suffix List from the file system and register it
 * with the parser before use.
 */

import tldParse, { ExtractResult } from 'tld-parse';
import * as fs from 'fs';
import * as path from 'path';

console.log('--- Node.js TypeScript Example for tld-parse ---\n');

// --- Step 1: Load the Public Suffix List ---

// Construct the absolute path to the .dat file from the project root.
// __dirname is the directory of the current script (examples/nodejs)
const tldFilePath = path.resolve(__dirname, '..', '..', 'data', 'test.dat');

console.log(`Loading Public Suffix List from: ${tldFilePath}`);

try {
  // Read the file content as a UTF-8 string.
  const tldData: string = fs.readFileSync(tldFilePath, 'utf-8');

  // --- Step 2: Register the list with the parser ---
  tldParse.register(tldData);

  console.log('Successfully registered the TLD list.\n');

  // --- Step 3: Run parsing examples ---
  const domainsToTest: string[] = [
    'www.google.com',
    'forums.bbc.co.uk',
    'my-project.github.io', // A private domain
    'https://sub.example.co.jp/some/path?query=string',
    '192.168.1.1'
  ];

  console.log('--- Parsing Results ---');
  domainsToTest.forEach((domain: string, index: number) => {
    const result: ExtractResult | null = tldParse(domain);
    console.log(`[${index + 1}] Input: ${domain}`);
    console.log('    Result: ', result);
    console.log('-------------------------');
  });

} catch (error: any) {
  console.error('\n--- ERROR ---');
  console.error('Failed to run the Node.js TypeScript example.');
  console.error('Error details:', error.message);
  console.error('\nTroubleshooting Tips:');
  console.error('1. Make sure you have run `npm install` in the root directory.');
  console.error('2. Ensure the file `data/public_suffix_list.dat` exists.');
  console.error('3. To run this script, navigate to `examples/nodejs` and use `npm start`.\n');
}
