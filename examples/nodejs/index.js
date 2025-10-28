/**
 * Node.js Example for tld-parse
 *
 * This script demonstrates how to use the `tld-parse` library in a Node.js environment.
 * It shows how to load the Public Suffix List from the file system and register it
 * with the parser before use.
 */

// Use require for CommonJS modules in Node.js
const tldParse = require('tld-parse');


console.log('--- Node.js Example for tld-parse ---\n');

// --- Step 1: Load the Public Suffix List ---


try {


  console.log('Successfully registered the TLD list.\n');

  // --- Step 3: Run parsing examples ---
  const domainsToTest = [
    'www.google.com',
    'forums.bbc.co.uk',
    'my-project.github.io', // A private domain
    'https://sub.example.co.jp/some/path?query=string',
    '192.168.1.1'
  ];

  console.log('--- Parsing Results ---');
  domainsToTest.forEach((domain, index) => {
    const result = tldParse(domain);
    console.log(`[${index + 1}] Input: ${domain}`);
    console.log('    Result: ', result);
    console.log('-------------------------');
  });

} catch (error) {
  console.error('\n--- ERROR ---');
  console.error('Failed to run the Node.js example.');
  console.error('Error details:', error.message);
  console.error('\nTroubleshooting Tips:');
  console.error('1. Make sure you have run `npm install` in the root directory.');
  console.error('2. Ensure the file `data/public_suffix_list.dat` exists.');
  console.error('3. To run this script, use: `node examples/nodejs/index.js` from the project root.\n');
}
