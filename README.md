# tld-parse

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Browser](https://img.shields.io/badge/Browser-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/API/Window)

`tld-parse` is a robust TypeScript library designed for accurate extraction of subdomain, domain, and public suffix components from URLs and hostnames. It leverages the comprehensive [Public Suffix List (PSL)](https://publicsuffix.org/) to ensure precise parsing, handling complex cases like multi-part suffixes, wildcards, and private domains.

Unlike naive string splitting methods that often fail with complex TLDs (e.g., `co.uk`), `tld-parse` provides a reliable solution by adhering to the official PSL. This ensures that you correctly identify the registrable domain, separating it from its public suffix and any subdomains.

> A "public suffix" is one under which Internet users can directly register names.
> It is also sometimes referred to as an effective TLD (eTLD).

## Features

-   **Accurate Parsing**: Utilizes the Public Suffix List for precise domain component extraction.
-   **Flexible Input**: Supports single domain strings or arrays of domain strings.
-   **URL & IP Handling**: Correctly processes full URLs, hostnames, and IP addresses (IPv4 & IPv6).
-   **Custom Suffix Lists**: Provides an API to register an updated or custom Public Suffix List at runtime.
-   **TypeScript First**: Written in TypeScript, providing strong typing and excellent developer experience.
-   **Universal Compatibility**: Works seamlessly in Node.js and browser environments.

## Install

```bash
# Install via npm
npm install --save tld-parse

# If you are using TypeScript, type definitions are included automatically.
```

## Usage

### Basic Extraction

The `tldParse` function accepts a single string (URL or hostname) and returns an object containing `subdomain`, `domain`, `suffix`, and `isPrivate` properties, or `null` for invalid inputs.

```ts
import tldParse, { ExtractResult } from 'tld-parse';

// Example 1: Simple Domain
const result1 = tldParse('www.google.com');
console.log(result1);
/*
{
  subdomain: 'www',
  domain: 'google',
  suffix: 'com',
  isPrivate: false,
}
*/

// Example 2: Multi-part Suffix
const result2 = tldParse('forums.bbc.co.uk');
console.log(result2);
/*
{
  subdomain: 'forums',
  domain: 'bbc',
  suffix: 'co.uk',
  isPrivate: false,
}
*/

// Example 3: Private Suffix
const result3 = tldParse('my-project.github.io');
console.log(result3);
/*
{
  subdomain: '',
  domain: 'my-project',
  suffix: 'github.io',
  isPrivate: true,
}
*/

// Example 4: IP Address
const result4 = tldParse('192.168.1.1');
console.log(result4);
/*
{
  subdomain: '',
  domain: '192.168.1.1',
  suffix: '',
  isPrivate: false,
}
*/

// Example 5: Invalid Input
const result5 = tldParse('');
console.log(result5); // null
```

### Batch Extraction (Array Input)

Pass an array of domain strings to `tldParse` to get an array of results.

```ts
import tldParse, { ExtractResult } from 'tld-parse';

const domains = [
  'www.google.com',
  'my-app.eu.platform.sh', // Example with private suffix and wildcard
  'invalid-domain',
  'http://[2001:db8::1]:8080/path', // IPv6 in URL
];

const results = tldParse(domains);
console.log(results);
/*
[
  { subdomain: 'www', domain: 'google', suffix: 'com', isPrivate: false },
  { subdomain: '', domain: 'my-app', suffix: 'eu.platform.sh', isPrivate: true },
  { subdomain: '', domain: 'invalid-domain', suffix: '', isPrivate: false },
  { subdomain: '', domain: '2001:db8::1', suffix: '', isPrivate: false }
]
*/
```

## Advanced Usage

### Updating the Public Suffix List

`tld-parse` comes bundled with a version of the Public Suffix List. However, this list is updated regularly. If you need to use the absolute latest version of the list without waiting for a new release of this library, you can provide your own list using the `tldParse.register()` method.

The `register` method accepts the full text content of the `public_suffix_list.dat` file as a single string.

#### Example in Node.js

You can read the file from your disk and register it.

```ts
import tldParse from 'tld-parse';
import * as fs from 'fs';
import * as path from 'path';

// Load the latest list from a file
const tldData = fs.readFileSync(path.join(__dirname, 'public_suffix_list.dat'), 'utf-8');

// Register it with the parser
tldParse.register(tldData);

// Now, tldParse will use your provided list
const result = tldParse('www.newly-added-suffix.com');
```

#### Example with a Modern Bundler (Vite, etc.)

If you are using a modern bundler like Vite, you can often import the raw text content of a file directly.

```ts
import tldParse from 'tld-parse';

// Import the raw text content of the .dat file
// The `?raw` suffix is a Vite-specific feature. Other bundlers may have similar mechanisms.
import tldData from './path/to/public_suffix_list.dat?raw';

// Register the TLD list synchronously on module load
tldParse.register(tldData);

// Ready to use!
const result = tldParse('www.google.com');
```

## API Reference

### `tldParse(domain: string): ExtractResult | null`
### `tldParse(domains: string[]): (ExtractResult | null)[]`

The main function to extract domain components.

-   `domain`: A single string representing a URL, hostname, or IP address.
-   `domains`: An array of strings, each representing a URL, hostname, or IP address.

Returns:
-   For single string input: An object of type `ExtractResult` or `null` if the input is invalid.
-   For array input: An array of `ExtractResult | null` objects, corresponding to each input string.

#### `interface ExtractResult`

```ts
interface ExtractResult {
  /**
   * The subdomain part of the domain.
   * e.g., for 'www.google.com', it is 'www'.
   */
  subdomain: string;

  /**
   * The main domain part (Second-Level Domain).
   * e.g., for 'www.google.com', it is 'google'.
   */
  domain: string;

  /**
   * The suffix or Top-Level Domain (TLD).
   * e.g., for 'www.google.com', it is 'com'.
   */
  suffix: string;

  /**
   * Indicates if the domain is under a private TLD according to the Public Suffix List.
   */
  isPrivate: boolean;
}
```

## FAQ

### Why does `tld-parse` not extract my specific suffix?

`tld-parse` relies entirely on the [Public Suffix List (PSL)](https://publicsuffix.org/). If a suffix is not extracted as expected, it's likely due to its absence or specific rules within the PSL. Amendments or additions to the list should be proposed directly to the PSL project.

### What is the difference between Public and Private Suffixes?

The PSL categorizes suffixes into "public" and "private" sections. Public suffixes are generally managed by domain registries (e.g., `.com`, `.co.uk`). Private suffixes are typically managed by private organizations for their own subdomains (e.g., `github.io`, `platform.sh`). `tld-parse` correctly identifies and flags private suffixes with the `isPrivate: true` property in the result.

## Development

To build the library:
```bash
npm run build
```

To run tests:
```bash
npm test
```

## License

MIT License
